import React from "react";
import { Control } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { TemplateField } from "@/data/templates";

export function FormFields({ fields, control }: { fields: TemplateField[], control: Control<any> }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {fields.map((field) => (
        <FormField
          key={field.id}
          control={control}
          name={field.id}
          render={({ field: formField }) => (
            <FormItem className={field.type === 'textarea' || field.type === 'checkbox-group' ? 'md:col-span-2' : ''}>
              <FormLabel className="text-foreground/90">{field.label}</FormLabel>
              <FormControl>
                {field.type === 'text' ? (
                  <Input placeholder={field.placeholder} {...formField} value={formField.value || ''} />
                ) : field.type === 'date' ? (
                  <Input type="date" {...formField} value={formField.value || ''} />
                ) : field.type === 'textarea' ? (
                  <Textarea placeholder={field.placeholder} className="min-h-[100px]" {...formField} value={formField.value || ''} />
                ) : field.type === 'select' ? (
                  <Select onValueChange={formField.onChange} value={formField.value || ''}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      {field.options?.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : field.type === 'checkbox-group' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {field.checkboxes?.map((item) => (
                      <div key={item} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                        <Checkbox
                          checked={formField.value?.includes(item)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? formField.onChange([...(formField.value || []), item])
                              : formField.onChange(
                                  formField.value?.filter((value: string) => value !== item)
                                )
                          }}
                        />
                        <div className="space-y-1 leading-none">
                          <FormLabel className="font-normal cursor-pointer">
                            {item}
                          </FormLabel>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Input {...formField} />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
