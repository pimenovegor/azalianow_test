import { useState } from "react";
import Basket from "../Basket/Basket";
import Liked from "../Liked/Liked";
import S from "./Header.module.scss";

export default function Header() {
  const [basketOpen, setBasketOpen] = useState(false);
  const [likedOpen, setLikedOpen] = useState(false);

  const onLiked = () => {
    setBasketOpen(false);
    setLikedOpen((prev) => !prev);
  };

  const onBasket = () => {
    setLikedOpen(false);
    setBasketOpen((prev) => !prev);
  };

  return (
    <header className={S.header}>
      <button className={S.btn} onClick={onLiked}>
        Избранное
      </button>
      <button className={S.btn} onClick={onBasket}>
        Корзина
      </button>
      {basketOpen && <Basket />}
      {likedOpen && <Liked />}
    </header>
  );
}
