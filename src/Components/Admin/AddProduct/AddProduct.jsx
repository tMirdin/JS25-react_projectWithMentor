import { Box, TextField } from "@mui/material";
import React from "react";

const AddProduct = () => {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "55ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </>
  );
};

export default AddProduct;
