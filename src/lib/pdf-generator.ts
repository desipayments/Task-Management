import { jsPDF } from "jspdf";
import { TemplateField } from "@/data/templates";

const RED: [number, number, number] = [204, 20, 20];
const RED_DARK: [number, number, number] = [160, 10, 10];
const BLACK: [number, number, number] = [18, 18, 18];
const DARK_GRAY: [number, number, number] = [55, 55, 55];
const MID_GRAY: [number, number, number] = [130, 130, 130];
const LIGHT_GRAY: [number, number, number] = [242, 242, 242];
const BORDER_GRAY: [number, number, number] = [210, 210, 210];
const WHITE: [number, number, number] = [255, 255, 255];

export async function generatePdf(
  templateName: string,
  categoryName: string,
  fields: TemplateField[],
  formData: Record<string, any>,
  filename: string
): Promise<boolean> {
  try {
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const marginL = 14;
    const marginR = 14;
    const contentW = pageW - marginL - marginR;
    let y = 0;
    let currentPage = 1;

    const addPage = () => {
      pdf.addPage();
      currentPage++;
      y = 0;
      drawPageHeader();
    };

    const checkY = (needed: number) => {
      if (y + needed > pageH - 16) addPage();
    };

    const drawPageHeader = () => {
      // Full-width red header bar
      pdf.setFillColor(...RED);
      pdf.rect(0, 0, pageW, 18, "F");
      // Accent strip
      pdf.setFillColor(...RED_DARK);
      pdf.rect(0, 18, pageW, 1.2, "F");

      // Logo text
      pdf.setTextColor(...WHITE);
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "bold");
      pdf.text("ONEBALANCE", marginL, 11.5);

      // Category tag on right
      pdf.setFontSize(7.5);
      pdf.setFont("helvetica", "normal");
      pdf.text(categoryName.toUpperCase(), pageW - marginR, 11.5, { align: "right" });

      y = 26;
    };

    const drawCoverBlock = () => {
      // Large title area beneath header on first page
      pdf.setFillColor(...LIGHT_GRAY);
      pdf.rect(0, 19.2, pageW, 28, "F");

      pdf.setTextColor(...RED);
      pdf.setFontSize(7);
      pdf.setFont("helvetica", "bold");
      pdf.text(categoryName.toUpperCase(), marginL, 28);

      pdf.setTextColor(...BLACK);
      pdf.setFontSize(16);
      pdf.setFont("helvetica", "bold");
      const titleLines = pdf.splitTextToSize(templateName, contentW) as string[];
      titleLines.forEach((line, idx) => {
        pdf.text(line, marginL, 34 + idx * 7);
      });

      // Date row
      pdf.setTextColor(...MID_GRAY);
      pdf.setFontSize(7.5);
      pdf.setFont("helvetica", "normal");
      pdf.text(`Generated: ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}`, marginL, 44);

      // Thin red rule below cover block
      pdf.setFillColor(...RED);
      pdf.rect(marginL, 46.5, 30, 0.8, "F");

      y = 56;
    };

    const drawSectionHeader = (label: string) => {
      checkY(12);
      pdf.setFillColor(...RED);
      pdf.rect(marginL, y, contentW, 7, "F");
      pdf.setTextColor(...WHITE);
      pdf.setFontSize(7.5);
      pdf.setFont("helvetica", "bold");
      pdf.text(label.toUpperCase(), marginL + 3, y + 4.8);
      y += 10;
    };

    const drawField = (field: TemplateField) => {
      const rawValue = formData[field.id];

      if (field.type === "checkbox-group") {
        const checked: string[] = Array.isArray(rawValue) ? rawValue : [];
        const items = field.checkboxes ?? [];
        const blockH = 9 + items.length * 6.5 + 5;
        checkY(blockH);

        // Field label
        pdf.setFontSize(7);
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(...RED);
        pdf.text(field.label.toUpperCase(), marginL, y);
        y += 4;

        pdf.setDrawColor(...BORDER_GRAY);
        pdf.setLineWidth(0.15);
        pdf.line(marginL, y, marginL + contentW, y);
        y += 3;

        items.forEach((item) => {
          checkY(7);
          const ticked = checked.includes(item);

          // Checkbox box
          pdf.setDrawColor(...(ticked ? RED : BORDER_GRAY));
          pdf.setFillColor(...(ticked ? RED : WHITE));
          pdf.setLineWidth(0.4);
          pdf.roundedRect(marginL, y - 3.5, 4, 4, 0.5, 0.5, ticked ? "FD" : "D");

          // Checkmark
          if (ticked) {
            pdf.setDrawColor(...WHITE);
            pdf.setLineWidth(0.7);
            pdf.line(marginL + 0.9, y - 1.6, marginL + 1.8, y - 0.5);
            pdf.line(marginL + 1.8, y - 0.5, marginL + 3.3, y - 3.2);
          }

          pdf.setFontSize(8.5);
          pdf.setFont("helvetica", ticked ? "bold" : "normal");
          pdf.setTextColor(...(ticked ? BLACK : DARK_GRAY));
          pdf.text(item, marginL + 6, y);
          y += 6.5;
        });
        y += 5;
        return;
      }

      // Text / textarea / date / select field
      const value = typeof rawValue === "string" ? rawValue.trim() : (rawValue ?? "");
      const isEmpty = !value;
      const displayValue = isEmpty ? "—" : String(value);
      const isTextarea = field.type === "textarea";
      const maxW = contentW - 6;
      const lines = pdf.splitTextToSize(displayValue, maxW) as string[];
      const lineH = isTextarea ? 5 : 5.2;
      const valueH = lines.length * lineH;
      const blockH = 7 + 3 + valueH + 4 + 5;
      checkY(blockH);

      // Label row
      pdf.setFontSize(7);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(...RED);
      pdf.text(field.label.toUpperCase(), marginL, y);
      y += 3;

      // Separator
      pdf.setDrawColor(...BORDER_GRAY);
      pdf.setLineWidth(0.15);
      pdf.line(marginL, y, marginL + contentW, y);
      y += 4;

      // Value
      pdf.setFontSize(9.5);
      pdf.setFont("helvetica", isEmpty ? "italic" : "normal");
      pdf.setTextColor(...(isEmpty ? MID_GRAY : BLACK));
      lines.forEach((line) => {
        pdf.text(line, marginL + 3, y);
        y += lineH;
      });
      y += 5;
    };

    const drawFooter = () => {
      const total = (pdf.internal as any).getNumberOfPages();
      for (let i = 1; i <= total; i++) {
        pdf.setPage(i);
        // Footer bar
        pdf.setFillColor(...LIGHT_GRAY);
        pdf.rect(0, pageH - 11, pageW, 11, "F");
        pdf.setFillColor(...RED);
        pdf.rect(0, pageH - 11, pageW, 0.6, "F");

        pdf.setTextColor(...MID_GRAY);
        pdf.setFontSize(6.5);
        pdf.setFont("helvetica", "normal");
        pdf.text("CONFIDENTIAL — ONEBALANCE DOCUMENT", marginL, pageH - 5.5);
        pdf.text(`Page ${i} of ${total}`, pageW - marginR, pageH - 5.5, { align: "right" });
      }
    };

    // ── Build document ──────────────────────────────────────────────
    drawPageHeader();
    drawCoverBlock();

    // Group fields into sections — detect "section:" prefix in label
    let inSection = false;
    fields.forEach((field) => {
      if (field.label.startsWith("__SECTION__")) {
        drawSectionHeader(field.label.replace("__SECTION__", ""));
        inSection = true;
        return;
      }
      drawField(field);
    });

    // ── Embed data in PDF metadata ──────────────────────────────────
    const jsonStr = JSON.stringify({ ...formData, __template: filename });
    const base64Str = btoa(unescape(encodeURIComponent(jsonStr)));
    pdf.setProperties({
      title: templateName,
      subject: categoryName,
      author: "OneBalance",
      keywords: `TASKFORGE_DATA:${base64Str}`,
      creator: "OneBalance",
    });

    // Also write hidden marker as 1pt invisible text as fallback
    pdf.setFontSize(1);
    pdf.setTextColor(255, 255, 255);
    if (y + 4 < pageH - 16) {
      pdf.text(`TASKFORGE_DATA:${base64Str}`, marginL, y + 2);
    }

    drawFooter();
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error("Error generating PDF:", error);
    return false;
  }
}
