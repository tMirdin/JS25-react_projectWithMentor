import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  let arr = [
    { title: "Iphone", category: "Phone", model: "14 Pro Max" },
    { title: "Apple", category: "Wathc", model: "7 series" },
    { title: "Samsung", category: "Phone", model: "14 Pro Max" },
    { title: "Iphone", category: "Phone", model: "14 Pro Max" },
  ];
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px"
      >
        {arr.map((item) => (
          <Grid xs={3.5} mb={7}>
            <ProductCard obj={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductsList;
