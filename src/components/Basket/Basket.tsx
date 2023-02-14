import { useAppContext } from "@/state/AppWarapper";
import { useEffect, useState } from "react";
import S from "./Basket.module.scss";

export default function Basket() {
  const [keys, setKeys] = useState<number[] | null>(null);
  const { basket } = useAppContext();

  useEffect(() => {
    const newKeys = Object.keys(basket).map((id) => Number(id));
    setKeys(newKeys);
  }, [basket]);

  return (
    <div className={S.basket}>
      <h2>Корзина</h2>
      {!keys || keys.length === 0 ? (
        <div className={S.empty}>Пусто</div>
      ) : (
        keys.map((id) => (
          <div className={S.product} key={id}>
            {basket[id]?.title}
            <span className={S.amount}>{basket[id]?.amount}</span>
          </div>
        ))
      )}
    </div>
  );
}
