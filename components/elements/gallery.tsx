"use client";

import { Image as ImageType } from "@/common/types";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import Image from "next/image";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tabs defaultValue={images[0]?.id} className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabsList className="grid grid-cols-4 gap-3 bg-transparent">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabsList>
      </div>

      {images.map((image) => (
        <TabsContent
          key={image.id}
          value={image.id}
          className="aspect-square w-full"
        >
          <div className="relative aspect-square h-full w-full sm:rounded-lg overflow-hidden">
            <Image
              fill
              src={image.url}
              alt="Image"
              className="object-cover object-center"
            />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default Gallery;
