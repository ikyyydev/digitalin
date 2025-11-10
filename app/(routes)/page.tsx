import getBillboards from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/layouts/billboard";
import CategoryList from "@/components/layouts/category-list";
import Container from "@/components/layouts/container";
import ProductList from "@/components/layouts/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();
  const billboards = await getBillboards(
    "c9dc7734-1df9-4f00-94ca-bb2fca2272d3"
  );
  return (
    <>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <Container>
          <div className="flex flex-col gap-y-20 px-4 sm:px-6 lg:px-8">
            <CategoryList
              title="Shop by Category"
              description="Jelajahi berbagai kategori produk Apple"
              items={categories}
            />
            <ProductList
              title="Featured Products"
              description="Discover our most popular and trending items"
              items={products}
              totalFeatured={8}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
