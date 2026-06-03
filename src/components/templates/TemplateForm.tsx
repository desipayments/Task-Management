import React from "react";
import { Form } from "@/components/ui/form";
import { FormFields } from "./FormFields";
import { PdfActions } from "./PdfActions";
import { useTemplateForm } from "@/hooks/use-template-form";
import { Template } from "@/data/templates";
import { CheckCircle2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TemplateForm({ template, categoryName }: { template: Template; categoryName: string }) {
  const {
    form,
    isGenerating,
    isUploading,
    hasSavedData,
    lastSavedAt,
    handleSavePdf,
    handleUploadPdf,
    handleClearForm,
  } = useTemplateForm(template, categoryName);

  const fields = template.fields ?? [];

  const savedLabel = lastSavedAt
    ? `Auto-saved at ${lastSavedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`
    : "Draft saved locally";

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <p className="text-sm font-medium text-primary mb-1">{categoryName}</p>
          <h1 className="text-3xl font-bold tracking-tight">{template.name}</h1>
        </div>
        <PdfActions
          onSave={handleSavePdf}
          onUpload={handleUploadPdf}
          isGenerating={isGenerating}
          isUploading={isUploading}
        />
      </div>

      {/* Saved-data banner */}
      {hasSavedData && (
        <div className="flex items-center justify-between mb-4 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-sm">
          <span className="flex items-center gap-2 text-primary font-medium">
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            {savedLabel}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearForm}
            className="h-7 px-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 gap-1.5"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </Button>
        </div>
      )}

      <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
        <div className="p-8 border-b bg-muted/20">
          <h2 className="text-2xl font-bold">{template.name}</h2>
          <p className="text-muted-foreground mt-1">{categoryName}</p>
        </div>

        <div className="p-8">
          <Form {...form}>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <FormFields fields={fields} control={form.control} />
            </form>
          </Form>
        </div>

        <div className="p-4 border-t bg-muted/20 text-xs text-muted-foreground text-center">
          Generated via OneBalance &bull; {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
