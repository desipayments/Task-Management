import React from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Header } from "@/components/layout/Header";
import { categories } from "@/data/templates";
import { CategoryCard } from "@/components/home/CategoryCard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/30">
      <Header />
      <PageTransition>
        <main className="flex-1 container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Structured Task Management
            </h1>
            <p className="text-lg text-muted-foreground">
              A precise, authoritative workspace for engineering teams. Fill out, save, and reload professional task templates with zero friction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <CategoryCard key={category.id} category={category} index={idx} />
            ))}
          </div>
        </main>
      </PageTransition>
    </div>
  );
}
