import { Category } from "@/common/types";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { AppleIcon } from "lucide-react";

interface CategoryCardProps {
  data: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ data }) => {
  return (
    <Card className="p-8">
      <CardContent className="flex flex-col items-center space-y-3">
        <div className="bg-slate-200 rounded-full flex justify-center items-center size-15 p-3">
          <AppleIcon />
        </div>
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>{`${data?.products?.length} products`}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
