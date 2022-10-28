import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ProductContextProvider from "./context/ProductContextProvider";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";

const App = () => {
  return (
    <ProductContextProvider>
      <NavBar />
      <AddProduct />
    </ProductContextProvider>
  );
};

export default App;
