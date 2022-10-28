import axios from "axios";
import React, { createContext } from "react";

export const productContext = createContext(); // облако

const API = "http://localhost:8000/products";

const ProductContextProvider = (props) => {
  // create
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }

  let cloud = {
    addProduct,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
