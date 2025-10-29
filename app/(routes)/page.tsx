import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/components/layouts/billboard";
import Container from "@/components/layouts/container";
import ProductList from "@/components/layouts/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards(
    "c9dc7734-1df9-4f00-94ca-bb2fca2272d3"
  );
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboards} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
