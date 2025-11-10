import { Category } from "@/common/types";
import NoResult from "@/components/elements/no-result";
import CategoryCard from "../elements/category-card";

interface CategoryListProps {
  title: string;
  description?: string;
  items: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <div>
      <h3 className="font-bold text-3xl mb-2">{title}</h3>
      <p className="text-lg text-slate-700 mb-8">{description}</p>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {items.map((item) => (
          <CategoryCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
