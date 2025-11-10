"use client";

import { Filter as FilterIcon } from "lucide-react";

import { Color, Storage } from "@/common/types";

import Filter from "./filter";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileFiltersProps {
  colors: Color[];
  storages: Storage[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ storages, colors }) => {
  return (
    <div className="relative z-40 lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center bg-black text-white rounded-full p-3">
          <FilterIcon size={20} className="text-white" />
        </SheetTrigger>
        <SheetContent className="w-3/4">
          <SheetHeader className="font-bold text-xl">
            <SheetTitle>Filter</SheetTitle>
            <SheetDescription>Find your perfect fit</SheetDescription>

            <div className="p-4">
              <Filter valueKey="colorId" name="Colors" data={colors} />
              <Filter valueKey="storageId" name="Storages" data={storages} />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilters;
