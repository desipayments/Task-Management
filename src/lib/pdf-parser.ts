import * as pdfjsLib from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const MARKER = 'TASKFORGE_DATA:';

export async function parsePdfData(file: File): Promise<any | null> {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    // Primary: extract from PDF metadata keywords field
    try {
      const meta = await pdf.getMetadata();
      const info = (meta?.info as any) ?? {};
      const keywords: string = info.Keywords ?? info.keywords ?? '';
      if (keywords.includes(MARKER)) {
        const base64Str = keywords.substring(keywords.indexOf(MARKER) + MARKER.length).trim().split(/\s+/)[0];
        if (base64Str) {
          const jsonStr = decodeURIComponent(escape(atob(base64Str)));
          return JSON.parse(jsonStr);
        }
      }
    } catch (_) {}

    // Fallback: scan all page text for marker
    let fullText = '';
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item: any) => item.str).join('');
      fullText += pageText;
      if (fullText.includes(MARKER)) break;
    }

    const markerIndex = fullText.indexOf(MARKER);
    if (markerIndex !== -1) {
      const base64Str = fullText.substring(markerIndex + MARKER.length).trim().split(/\s+/)[0];
      if (base64Str) {
        const jsonStr = decodeURIComponent(escape(atob(base64Str)));
        return JSON.parse(jsonStr);
      }
    }

    return null;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return null;
  }
}
