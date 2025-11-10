import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getStorages from "@/actions/get-storages";

import Billboard from "@/components/layouts/billboard";
import Container from "@/components/layouts/container";
import NoResult from "@/components/elements/no-result";
import ProductCard from "@/components/elements/product-card";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
    storageId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const { categoryId } = await params;
  const { sizeId, colorId, storageId } = await searchParams;
  const products = await getProducts({
    categoryId,
    sizeId,
    storageId,
    colorId,
  });

  const storages = await getStorages();
  const colors = await getColors();
  const category = await getCategory(categoryId);
  return (
    <div className="bg-white space-y-10">
      <Billboard data={category.billboard} />
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters storages={storages} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="storageId" name="Storages" data={storages} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 ? (
                <NoResult />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {products.map((item) => (
                    <ProductCard key={item.id} data={item} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
