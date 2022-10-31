import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import "./EditProduct.css";
import { productContext } from "../../../context/ProductContextProvider";

const EditProduct = () => {
  const { productDetails, readOneProduct } = useContext(productContext);
  return (
    <>
      <h2 id="add-title">Редактирование товара</h2>
      <form id="form-add">
        <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
          name="category"
        />
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          name="title"
        />
        <TextField
          className="outlined-basic"
          label="Модель"
          variant="outlined"
          name="model"
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          name="description"
        />
        <TextField
          className="outlined-basic"
          label="Цвет"
          variant="outlined"
          name="color"
        />
        <TextField
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          name="price"
        />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
          name="img1"
        />
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
          name="img2"
        />
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
          name="img3"
        />
        <Button variant="contained">Сохранить</Button>
      </form>
    </>
  );
};

export default EditProduct;
