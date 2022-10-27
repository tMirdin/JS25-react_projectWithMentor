import React from "react";
import { Button, TextField } from "@mui/material";
import "./EditProduct.css";

const EditProduct = () => {
  return (
    <>
      <h2 id="add-title">Редактирование товара</h2>
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
        <Button variant="contained">Сохранить</Button>
      </form>
    </>
  );
};

export default EditProduct;
