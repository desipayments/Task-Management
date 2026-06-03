import React from "react";
import { useParams, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { TemplateForm } from "@/components/templates/TemplateForm";
import { categories } from "@/data/templates";
import { ArrowLeft } from "lucide-react";
import NotFound from "@/pages/not-found";

export default function TemplatePage() {
  const { category, templateId } = useParams();
  
  const catObj = categories.find(c => c.id === category);
  const template = catObj?.templates.find(t => t.id === templateId);

  if (!catObj || !template) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <PageTransition>
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Templates
            </Link>
          </div>
          
          <TemplateForm template={template} categoryName={catObj.name} />
        </main>
      </PageTransition>
    </div>
  );
}
