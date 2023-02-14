import { Product } from "@/requsts/products";
import Image from "next/image";
import S from "./ProductCard.module.scss";
import Popular from "../../../public/icons/popular.svg";
import Star from "../../../public/icons/star.svg";
import BasketBtn from "../BasketBtn/BasketBtn";
import LikedBtn from "../LikedBtn/LikedBtn";
import { useState } from "react";
import { useAppContext } from "@/state/AppWarapper";

export default function ProductCard(props: { product: Product }) {
  const [amount, setAmount] = useState<number>(1);

  const {
    basket,
    addBasketItem,
    deleteBasketItem,
    liked,
    addLikedItem,
    deleteLikedItem,
  } = useAppContext();

  const {
    product: { image, category, title, price, rating, id },
  } = props;

  const popuDefine = (count?: number) => {
    if (!count) return false;
    if (count > 300) return true;
    return false;
  };

  const rubConverter = (dollar: number) => {
    return Math.round(dollar * 70);
  };

  const startsPrint = (rate?: number) => {
    if (!rate) return;
    return [...Array(Math.round(rating?.rate ?? 0))].map((el) => (
      <Star key={Math.random()} />
    ));
  };

  return (
    <div className={S.card}>
      <div className={S.popular}>
        {popuDefine(rating?.count) && <Popular />}
      </div>
      <Image src={image} alt="product-img" width={220} height={220} />
      <div className={S.row}>
        <span className={S.category}>{category}</span>
        <div className={S.rate}>
          {startsPrint(rating?.rate)}
          <span className={S.review}>{rating?.count} отзывов</span>
        </div>
      </div>
      <div className={S.title}>{title}</div>
      <div className={S.price}>
        {rubConverter(price)} ₽<span className={S.price_sign}>/шт.</span>
      </div>
      <div className={S.btns_row}>
        <BasketBtn
          inBasket={!!basket[id]}
          amount={amount}
          setAmount={setAmount}
          addItem={() => addBasketItem(id, title, amount)}
          deleteItem={() => deleteBasketItem(id)}
        />
        <LikedBtn
          inLiked={!!liked[id]}
          addItem={() => addLikedItem(id, title)}
          deleteItem={() => deleteLikedItem(id)}
        />
      </div>
    </div>
  );
}
