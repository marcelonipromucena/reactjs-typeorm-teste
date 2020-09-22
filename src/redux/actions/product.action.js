import axios from "axios";
import * as types from "../types";

const fetchProductRequest = () => {
  return {
    type: types.FETCH_PRODUCTS_REQUEST,
  };
};

const fetchProductSuccess = (data) => {
  return {
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const fetchProductFailure = (error) => {
  return {
    type: types.FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductRequest());

    axios
      .get("http://localhost:3000/products")
      .then(async (response) => {
        dispatch(fetchProductSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchProductFailure(error.response));
      });
  };
};

export default {
  fetchProducts,
};
