import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ProductContextProvider from "./context/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <ProductContextProvider>
      <NavBar />
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
