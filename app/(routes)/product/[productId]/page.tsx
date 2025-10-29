import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";

import Gallery from "@/components/elements/gallery";
import InfoProduct from "@/components/elements/info-product";
import Container from "@/components/layouts/container";
import ProductList from "@/components/layouts/product-list";
import { Separator } from "@/components/ui/separator";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { productId } = await params;
  const product = await getProduct(productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:mb-[100px]">
            {/* Gallery */}
            <Gallery images={product.images} />
            {/* Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <InfoProduct data={product} />
            </div>
          </div>
          <Separator />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
