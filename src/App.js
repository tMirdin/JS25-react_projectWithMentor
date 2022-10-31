import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ProductContextProvider from "./context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <NavBar />
    </ProductContextProvider>
  );
};

export default App;
