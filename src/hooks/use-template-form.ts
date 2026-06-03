import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { generatePdf } from "@/lib/pdf-generator";
import { parsePdfData } from "@/lib/pdf-parser";
import { Template } from "@/data/templates";

const storageKey = (id: string) => `ob_form_${id}`;
const DEBOUNCE_MS = 600;

function readStorage(templateId: string): Record<string, any> {
  try {
    const raw = localStorage.getItem(storageKey(templateId));
    if (raw) return JSON.parse(raw);
  } catch {}
  return {};
}

function writeStorage(templateId: string, data: Record<string, any>) {
  try {
    localStorage.setItem(storageKey(templateId), JSON.stringify(data));
  } catch {}
}

function clearStorage(templateId: string) {
  try {
    localStorage.removeItem(storageKey(templateId));
  } catch {}
}

function hasAnyData(data: Record<string, any>): boolean {
  return Object.values(data).some((v) =>
    Array.isArray(v) ? v.length > 0 : Boolean(v)
  );
}

export function useTemplateForm(template: Template | undefined, categoryName: string) {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fields = template ? (template.fields ?? []) : [];

  const getDynamicSchema = () => {
    const shape: Record<string, z.ZodTypeAny> = {};
    fields.forEach((field) => {
      shape[field.id] =
        field.type === "checkbox-group"
          ? z.array(z.string()).default([])
          : z.string().optional().default("");
    });
    return z.object(shape);
  };

  // Load persisted data before creating the form so it's the initial value
  const stored = template ? readStorage(template.id) : {};
  const [hasSavedData, setHasSavedData] = useState(() =>
    template ? hasAnyData(readStorage(template.id)) : false
  );
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(() =>
    template && hasAnyData(readStorage(template.id)) ? new Date() : null
  );

  const form = useForm({
    resolver: zodResolver(getDynamicSchema()),
    defaultValues: stored,
  });

  // Auto-save on every change, debounced
  useEffect(() => {
    if (!template) return;
    const { unsubscribe } = form.watch((values) => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        writeStorage(template.id, values as Record<string, any>);
        setHasSavedData(true);
        setLastSavedAt(new Date());
      }, DEBOUNCE_MS);
    });
    return () => {
      unsubscribe();
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
  }, [form, template]);

  const handleClearForm = () => {
    if (!template) return;
    clearStorage(template.id);
    // Reset every field to its blank default
    const blank: Record<string, any> = {};
    fields.forEach((f) => {
      blank[f.id] = f.type === "checkbox-group" ? [] : "";
    });
    form.reset(blank);
    setHasSavedData(false);
    setLastSavedAt(null);
    toast({ title: "Form cleared", description: "All saved data has been removed." });
  };

  const handleSavePdf = async () => {
    if (!template) return;
    setIsGenerating(true);
    const formData = form.getValues();
    const date = new Date().toISOString().split("T")[0];
    const filename = `OneBalance_${template.name.replace(/\s+/g, "_")}_${date}.pdf`;

    const success = await generatePdf(template.name, categoryName, fields, formData, filename);

    if (success) {
      toast({ title: "PDF Saved", description: "Your form has been exported as a PDF." });
    } else {
      toast({ variant: "destructive", title: "Error", description: "Failed to generate PDF. Please try again." });
    }
    setIsGenerating(false);
  };

  const handleUploadPdf = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast({ variant: "destructive", title: "Invalid file type", description: "Please upload a valid PDF file." });
      return;
    }

    setIsUploading(true);
    try {
      const data = await parsePdfData(file);
      if (data) {
        // Populate form fields
        Object.keys(data).forEach((key) => form.setValue(key as any, data[key]));
        // Also persist to localStorage immediately
        if (template) {
          writeStorage(template.id, { ...form.getValues(), ...data });
          setHasSavedData(true);
          setLastSavedAt(new Date());
        }
        toast({ title: "Template Loaded", description: "Form fields have been populated from the PDF." });
      } else {
        toast({ variant: "destructive", title: "Invalid PDF", description: "This PDF doesn't contain readable OneBalance data." });
      }
    } catch {
      toast({ variant: "destructive", title: "Error parsing PDF", description: "An unexpected error occurred while parsing the file." });
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  return {
    form,
    isGenerating,
    isUploading,
    hasSavedData,
    lastSavedAt,
    handleSavePdf,
    handleUploadPdf,
    handleClearForm,
  };
}
