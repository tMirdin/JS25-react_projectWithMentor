import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContextProvider";
import "./AddProduct.css";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");

  function handleAdd() {
    let obj = {
      category,
      title,
      model,
      description,
      color,
      price,
      img1,
      img2,
      img3,
    };
    addProduct(obj);
  }

  return (
    <>
      <h2 id="add-title">Добавление товара</h2>
      <form id="form-add" onSubmit={handleAdd}>
        <TextField
          className="outlined-basic"
          label="Категория"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Название"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Модель"
          variant="outlined"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Описание"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Цвет"
          variant="outlined"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Цена"
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 1"
          variant="outlined"
          value={img1}
          onChange={(e) => setImg1(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 2"
          variant="outlined"
          value={img2}
          onChange={(e) => setImg2(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото 3"
          variant="outlined"
          value={img3}
          onChange={(e) => setImg3(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
