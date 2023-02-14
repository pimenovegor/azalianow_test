import S from "./LikedBtn.module.scss";
import LikeRed from "../../../public/icons/like-red.svg";
import LikeGrey from "../../../public/icons/like-grey.svg";

type LikedBtnProps = {
  inLiked: boolean;
  addItem: () => void;
  deleteItem: () => void;
};

export default function LikedBtn(props: LikedBtnProps) {
  const { inLiked, addItem, deleteItem } = props;

  return (
    <>
      {inLiked ? (
        <button className={S.delete_from_liked_btn} onClick={deleteItem}>
          <LikeRed />
        </button>
      ) : (
        <button className={S.add_to_liked_btn} onClick={addItem}>
          <LikeGrey />
        </button>
      )}
    </>
  );
}
