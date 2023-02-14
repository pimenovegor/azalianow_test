import { createContext, ReactNode, useContext, useState } from "react";

export type Basket = { [key: number]: { title: string; amount: number } };

export type Liked = { [key: number]: { title: string } };

export type State = {
  basket: Basket;
  addBasketItem: (id: number, title: string, amount: number) => void;
  deleteBasketItem: (id: number) => void;
  liked: Liked;
  addLikedItem: (id: number, title: string) => void;
  deleteLikedItem: (id: number) => void;
};

const AppContext = createContext<State>({
  basket: {},
  addBasketItem: function (id: number, title: string, amount: number): void {
    throw new Error("Function addBasketItem not implemented.");
  },
  deleteBasketItem: function (id: number): void {
    throw new Error("Function deleteBasketItem not implemented.");
  },
  liked: {},
  addLikedItem: function (id: number, title: string): void {
    throw new Error("Function addLikedItem not implemented.");
  },
  deleteLikedItem: function (id: number): void {
    throw new Error("Function deleteLikedItem not implemented.");
  },
});

export function AppWrapper(props: { children: ReactNode }) {
  const [basket, setBasket] = useState<Basket>({});
  const [liked, setLiked] = useState<Liked>({});

  const { children } = props;

  const addBasketItem = (id: number, title: string, amount: number) => {
    setBasket((prev) => ({ ...prev, [id]: { title, amount } }));
  };

  const deleteBasketItem = (id: number) => {
    setBasket((prev) => {
      const newData = { ...prev };
      delete newData[id];
      return newData;
    });
  };

  const addLikedItem = (id: number, title: string) => {
    setLiked((prev) => ({ ...prev, [id]: { title } }));
  };

  const deleteLikedItem = (id: number) => {
    setLiked((prev) => {
      const newData = { ...prev };
      delete newData[id];
      return newData;
    });
  };

  return (
    <AppContext.Provider
      value={{
        basket,
        addBasketItem,
        deleteBasketItem,
        liked,
        addLikedItem,
        deleteLikedItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
