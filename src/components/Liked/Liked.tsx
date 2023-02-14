import { useAppContext } from "@/state/AppWarapper";
import { useEffect, useState } from "react";
import S from "./Liked.module.scss";

export default function Liked() {
  const [keys, setKeys] = useState<number[] | null>(null);
  const { liked } = useAppContext();

  useEffect(() => {
    const newKeys = Object.keys(liked).map((id) => Number(id));
    setKeys(newKeys);
  }, [liked]);

  return (
    <div className={S.liked}>
      <h2>Избранное</h2>
      {!keys || keys.length === 0 ? (
        <div className={S.empty}>Пусто</div>
      ) : (
        keys.map((id) => <div className={S.product} key={id}>{liked[id]?.title}</div>)
      )}
    </div>
  );
}
