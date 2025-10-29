"use client";

import { Filter as FilterIcon } from "lucide-react";

import { Color, Size } from "@/common/types";

import Filter from "./filter";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  return (
    <div className="relative z-40 lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center bg-black text-white rounded-full p-3">
          <FilterIcon size={20} className="text-white" />
        </SheetTrigger>
        <SheetContent className="w-2/4">
          <SheetHeader className="font-bold text-xl">
            <SheetTitle>Filter</SheetTitle>

            <div className="p-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilters;
