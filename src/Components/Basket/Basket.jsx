import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { basketContext } from "../../context/BasketContextProvider";

const Basket = () => {
  const { productsInBasket, getBasket, changeProductCount } =
    useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">My Basket</Typography>
        <>
          {productsInBasket ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Title</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Model</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Count</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>SubPrice</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {productsInBasket.products.map((elem) => (
                    <TableRow>
                      <TableCell>{elem.item.title}</TableCell>
                      <TableCell>{elem.item.model}</TableCell>
                      <TableCell>
                        <img src={elem.item.img1} alt="apple" width={40} />
                      </TableCell>
                      <TableCell>{elem.item.price}</TableCell>
                      <TableCell>
                        <input
                          min="1"
                          type="number"
                          style={{ width: "40px" }}
                          value={elem.count}
                          onChange={(e) =>
                            changeProductCount(elem.item.id, e.target.value)
                          }
                        />
                      </TableCell>
                      <TableCell>{elem.subPrice} сом</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <h1>Loading...</h1>
          )}
        </>
      </Container>
    </>
  );
};

export default Basket;
