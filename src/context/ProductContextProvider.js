import axios from "axios";
import React, { createContext, useReducer } from "react";

export const productContext = createContext(); // облако

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { product: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // create
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }

  //   read

  async function readProduct() {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  }
  //   readProduct();
  //   console.log(state);

  let cloud = {
    addProduct,
    readProduct,
    productsArr: state.product,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
