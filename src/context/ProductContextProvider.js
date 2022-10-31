import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContext = createContext(); // облако

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: null,
  productDetails: null,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...prevState, product: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...prevState, productDetails: action.payload };
    default:
      return prevState;
  }
}

const ProductContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  // create
  async function addProduct(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      return error;
    }
  }

  //   read

  async function readProduct() {
    const { data } = await axios(API);
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  }
  //   readProduct();
  //   console.log(state);

  async function readOneProduct(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }
  // readOneProduct(1);

  // delete
  async function deleteProduct(id) {
    try {
      await axios.delete(`${API}/${id}`);
      readProduct();
      navigate("/list");
    } catch (error) {
      return error;
    }
  }

  let cloud = {
    addProduct,
    readProduct,
    readOneProduct,
    deleteProduct,
    productsArr: state.product,
    productDetails: state.productDetails,
  };
  return (
    <productContext.Provider value={cloud}>
      {props.children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
