"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <Button
      onClick={() => router.push("/cart")}
      className="aspect-square flex items-center rounded-full p-2 relative bg-transparent cursor-pointer"
    >
      <div className="relative">
        <ShoppingBag size={16} color="black" />
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
          {cart.items.length}
        </span>
      </div>
    </Button>
  );
};

export default NavbarActions;
