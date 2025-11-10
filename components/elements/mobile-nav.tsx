"use client";

import { usePathname } from "next/navigation";
import { Category } from "@/common/types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/common/lib/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer block lg:hidden">
        <GiHamburgerMenu size={16} />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          <SheetTitle className="px-4 py-3">
            <Link href={"/"}>
              <p className="font-bold text-xl">Digitalin</p>
            </Link>
          </SheetTitle>
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-black border-y py-3 px-4 flex justify-between",
                route.active ? "text-black" : "text-neutral-500"
              )}
            >
              <SheetDescription>{route.label}</SheetDescription>
              <IoIosArrowForward size={20} />
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
