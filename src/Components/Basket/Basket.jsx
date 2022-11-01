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

const Basket = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h3">My Basket</Typography>
        <>
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
                <TableRow>
                  <TableCell>Apple</TableCell>
                  <TableCell>13 Pro</TableCell>
                  <TableCell>
                    <img
                      src="https://www.myphone.kg/files/media/17/17189.webp"
                      alt="apple"
                      width={40}
                    />
                  </TableCell>
                  <TableCell>60000 com</TableCell>
                  <TableCell>
                    <input type="number" style={{ width: "40px" }} />
                  </TableCell>
                  <TableCell>120000 com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </>
      </Container>
    </>
  );
};

export default Basket;
