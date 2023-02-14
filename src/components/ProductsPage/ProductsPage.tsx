import { Product } from "@/requsts/products";
import ProductCard from "../ProductCard/ProductCard";
import S from "./ProductsPage.module.scss";

export default function ProductsPage(props: { products: Product[] }) {
  const { products } = props;

  return (
    <div className={S.page}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
