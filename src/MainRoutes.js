import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import AddProduct from "./Components/Admin/AddProduct/AddProduct";
import ProductsList from "./Components/Products/ProductsList/ProductsList";
import ProductDetails from "./Components/Products/ProductDetails/ProductDetails";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductsList />} />
      <Route path="/details/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default MainRoutes;
