import { Product } from "@/common/types";
import NoResult from "@/components/elements/no-result";
import ProductCard from "@/components/elements/product-card";

interface ProductListProps {
  title: string;
  description?: string;
  items: Product[];
  totalFeatured?: number;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  description,
  items,
  totalFeatured,
}) => {
  return (
    <div>
      <h3 className="font-bold text-3xl mb-2">{title}</h3>
      <p className="text-lg text-slate-700 mb-8">{description}</p>
      {items.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {items.splice(0, totalFeatured).map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
