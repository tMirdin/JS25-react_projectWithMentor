import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import BasketContextProvider from "./context/BasketContextProvider";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <BasketContextProvider>
      <ProductContextProvider>
        <NavBar />
        <MainRoutes />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
