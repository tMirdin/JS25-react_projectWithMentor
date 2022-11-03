import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productContext } from "../../../context/ProductContextProvider";
import Filter from "../../Filter/Filter";
import ProductCard from "../ProductCard/ProductCard";

const ProductsList = () => {
  const { productsArr, readProduct } = useContext(productContext);
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState([0, 200000]);
  // console.log(paramsSearch.get("q"));
  useEffect(() => {
    if (category === "all") {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "", // null || ""
      });
    } else {
      setParamsSearch({
        category: category,
        price_gte: price[0],
        price_lte: price[1],
      });
    }
  }, [category, price]);

  useEffect(() => {
    readProduct();
  }, [paramsSearch]);

  return (
    <>
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h4">Filter</Typography>
        <Filter
          category={category}
          setCategory={setCategory}
          price={price}
          setPrice={setPrice}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px"
      >
        {productsArr
          ? productsArr.map((item) => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <ProductCard obj={item} />
              </Grid>
            ))
          : null}
      </Grid>
    </>
  );
};

export default ProductsList;
