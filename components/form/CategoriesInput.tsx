import React from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { categories } from "@/utils/categories";

const name = "category";

function CategoriesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className="mb-2 w-full">
      <Label
        htmlFor={name}
        className="capitalize mb-1"
      >
        Categories
      </Label>

      <Select
        defaultValue={defaultValue || categories[0].label}
        name={name}
        required
      >
        <SelectTrigger
          id={name}
          className="w-full"
        >
          <SelectValue />
        </SelectTrigger>

        <SelectContent position="popper">
          {categories.map((item) => (
            <SelectItem
              key={item.label}
              value={item.label}
            >
              <span className="flex items-center gap-2">
                <item.icon />
                {item.label}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default CategoriesInput;
