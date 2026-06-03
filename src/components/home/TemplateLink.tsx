import React from "react";
import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import { Template } from "@/data/templates";

export function TemplateLink({ categoryId, template }: { categoryId: string; template: Template }) {
  return (
    <Link href={`/template/${categoryId}/${template.id}`}>
      <div 
        className="group flex items-center justify-between rounded-md p-2 -mx-2 hover:bg-primary/10 transition-colors cursor-pointer"
        data-testid={`link-template-${template.id}`}
      >
        <div className="flex items-center gap-3">
          <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
            {template.name}
          </span>
        </div>
        <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
    </Link>
  );
}
