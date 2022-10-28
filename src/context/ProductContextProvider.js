import React, { createContext } from "react";

export const productContext = createContext(); // облако

const API = "http://localhost:8000/products";

const ProductContextProvider = (props) => {
  let cloud = {};
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
