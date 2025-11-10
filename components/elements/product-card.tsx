"use client";

import { MouseEventHandler } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

import useCart from "@/hooks/use-cart";
// import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/common/types";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import Button from "../ui/button";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCart();
  // const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  // const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
  //   event.stopPropagation();

  //   previewModal.onOpen(data);
  // };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  return (
    <Card
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border"
    >
      <CardHeader className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          alt="Image"
          fill
          priority
          sizes="auto"
          className="aspect-square object-cover rounded-md"
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{data.category?.name}</CardDescription>
        <CardDescription>
          <Currency value={data?.price} />
        </CardDescription>
      </CardContent>
      <Button
        onClick={onAddToCart}
        className="w-full flex rounded-md justify-center items-center"
      >
        <ShoppingCart size={16} className="mr-2" /> Add to cart
      </Button>
    </Card>
  );
};

export default ProductCard;
