import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Category } from "@/data/templates";
import { TemplateLink } from "./TemplateLink";

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors overflow-hidden group">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary transition-all duration-500" />
        <CardHeader className="pb-3">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl">{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-1">
            {category.templates.map((template) => (
              <TemplateLink 
                key={template.id} 
                categoryId={category.id} 
                template={template} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
