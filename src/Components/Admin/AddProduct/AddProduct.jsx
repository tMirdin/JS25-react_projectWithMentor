import { Button, TextField } from "@mui/material";
import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="form-add">
        <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Модель"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
        />
        <TextField className="outlined-basic" label="Цвет" variant="outlined" />
        <TextField className="outlined-basic" label="Цена" variant="outlined" />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
        />
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
        />
        <Button variant="contained">Добавить</Button>
      </form>
    </>
  );
};

export default AddProduct;
