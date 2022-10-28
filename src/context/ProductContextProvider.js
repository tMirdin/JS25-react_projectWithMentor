import React, { createContext } from "react";

export const productContext = createContext(); // облако

const ProductContextProvider = (props) => {
  let info = "Послыка из контекста";
  return (
    <productContext.Provider value={info}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
