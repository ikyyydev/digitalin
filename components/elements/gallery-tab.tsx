import { cn } from "@/common/lib/utils";
import { TabsTrigger } from "../ui/tabs";
import { Image as ImageType } from "@/common/types";
import Image from "next/image";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <TabsTrigger
      value={image.id}
      className={cn(
        "relative overflow-hidden flex aspect-square cursor-pointer items-center justify-center rounded-md h-20 w-20 data-[state=active]:ring-2 data-[state=active]:ring-black data-[state=active]:ring-offset-2 hover:ring-2 hover:ring-gray-600 hover:ring-offset-2"
      )}
    >
      <Image
        fill
        src={image.url}
        alt="Thumbnail"
        className="object-contain object-center"
      />
    </TabsTrigger>
  );
};

export default GalleryTab;
