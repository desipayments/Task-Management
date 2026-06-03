import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Upload, Loader2 } from "lucide-react";

interface PdfActionsProps {
  onSave: () => void;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isGenerating: boolean;
  isUploading: boolean;
}

export function PdfActions({ onSave, onUpload, isGenerating, isUploading }: PdfActionsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button 
        onClick={onSave} 
        disabled={isGenerating || isUploading}
        className="w-full sm:w-auto"
        data-testid="button-save-pdf"
      >
        {isGenerating ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
        Save as PDF
      </Button>

      <div className="relative w-full sm:w-auto">
        <input
          type="file"
          accept=".pdf"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          onChange={onUpload}
          disabled={isGenerating || isUploading}
          ref={fileInputRef}
          data-testid="input-upload-pdf"
        />
        <Button 
          variant="outline" 
          disabled={isGenerating || isUploading}
          className="w-full sm:w-auto pointer-events-none"
        >
          {isUploading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Upload className="mr-2 h-4 w-4" />}
          Upload PDF to Edit
        </Button>
      </div>
    </div>
  );
}
