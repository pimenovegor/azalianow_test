import ProductsPage from "@/components/ProductsPage/ProductsPage";
import { getAllProducts, Product } from "@/requsts/products";

export default function index(props: { products: Product[] }) {
  return <ProductsPage {...props} />;
}

export const getServerSideProps = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};
