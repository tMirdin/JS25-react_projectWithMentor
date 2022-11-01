import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: 0,
};

function reducer(prevState, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToBasket(productObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        products: [],
      };
    }

    let newProduct = {
      item: productObj,
      count: 1,
      subPrice: 0,
    };

    basket.products.push(newProduct);
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  const cloud = {
    addProductToBasket,
  };
  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
