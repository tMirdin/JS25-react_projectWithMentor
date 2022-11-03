import React from "react";
import Footer from "./Components/Footer/Footer";
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
        <Footer />
      </ProductContextProvider>
    </BasketContextProvider>
  );
};

export default App;
