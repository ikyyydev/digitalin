"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import { cn } from "@/common/lib/utils";
import { Color, Storage } from "@/common/types";

import Button from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useTransition } from "react";

interface FilterProps {
  data: (Color | Storage)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query,
      },
      { skipNull: true }
    );

    startTransition(() => {
      router.push(url);
    });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>

      <Separator className="my-4" />

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300 flex gap-1",
                selectedValue === filter.id && "border-primary"
              )}
              onClick={() => onClick(filter.id)}
              disabled={isPending}
            >
              {valueKey === "colorId" ? (
                <>
                  <div
                    className="w-6 h-6 rounded-md border"
                    style={{ backgroundColor: filter.value }}
                    title={filter.name}
                  />
                  {filter.name}
                </>
              ) : (
                filter.name || filter.value
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
