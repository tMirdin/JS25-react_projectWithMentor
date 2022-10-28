import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ProductContextProvider from "./context/ProductContextProvider";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductsList from "./Components/Products/ProductsList/ProductsList";

const App = () => {
  return (
    <ProductContextProvider>
      <NavBar />
      {/* <AddProduct /> */}
      <ProductsList />
    </ProductContextProvider>
  );
};

export default App;
