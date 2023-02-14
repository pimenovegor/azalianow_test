import S from "./BasketBtn.module.scss";
import Plus from "../../../public/icons/plus.svg";
import Minus from "../../../public/icons/minus.svg";
import { Dispatch, SetStateAction } from "react";

type BasketBtnProps = {
  inBasket: boolean;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  addItem: () => void;
  deleteItem: () => void;
};

export default function BasketBtn(props: BasketBtnProps) {
  const { inBasket, amount, setAmount, addItem, deleteItem } = props;

  return (
    <>
      {inBasket ? (
        <button className={S.delete_from_basket_btn} onClick={deleteItem}>В корзине</button>
      ) : (
        <div className={S.add_to_basket}>
          <button className={S.add_to_basket_btn} onClick={addItem}>
            В корзину
          </button>
          <button
            className={S.add_to_basket_count_btn}
            onClick={() => setAmount((prev) => prev - 1)}
          >
            <Minus />
          </button>
          <span className={S.add_to_basket_count}>{amount}</span>
          <button
            className={S.add_to_basket_count_btn}
            onClick={() => setAmount((prev) => prev + 1)}
          >
            <Plus />
          </button>
        </div>
      )}
    </>
  );
}
