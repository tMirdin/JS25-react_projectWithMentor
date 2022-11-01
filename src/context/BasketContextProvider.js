import React, { createContext, useReducer } from "react";

export const basketContext = createContext();

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: 0,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
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
      subPrice: productObj.price,
    };

    // Хранение дубликатов
    let filterBasket = basket.products.filter((elem) => {
      return elem.item.id === productObj.id;
    });

    if (filterBasket.length > 0) {
      basket.products = basket.products.filter((elem) => {
        return elem.item.id !== productObj.id;
      });
    } else {
      basket.products.push(newProduct);
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        products: [],
      };
    }
    console.log(132456);
    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeProductCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.products = basket.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addProductToBasket,
    getBasket,
    changeProductCount,
    productsInBasket: state.basket,
  };
  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
