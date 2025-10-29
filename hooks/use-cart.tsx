import { Product } from "@/common/types";
import {
  CheckCircle,
  FileWarning,
  MarsStroke,
  TriangleAlert,
  WindArrowDownIcon,
} from "lucide-react";
import { toast } from "sonner";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItem = get().items;
        const existingItem = currentItem.find((item) => item.id === data.id);

        if (existingItem) {
          return toast.warning("Item already in cart.", {
            icon: <TriangleAlert size={24} className="text-yellow-600" />,
            style: { backgroundColor: "#fef3c7", color: "#a16207" },
          });
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart", {
          icon: <CheckCircle size={24} className="text-green-600" />,
          style: { backgroundColor: "#dcfce7", color: "#166534" },
        });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item remove from the cart", {
          icon: <CheckCircle size={24} className="text-green-600" />,
          style: { backgroundColor: "#dcfce7", color: "#166534" },
        });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storeage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
