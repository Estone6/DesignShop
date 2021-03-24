import axios from "axios";
import {
  GET_PRODUCTS_LIST,
  STORE_PRODUCTS_LIST,
  ERROR_PRODUCT_LIST,
  GET_PRODUCT_DETAILS,
  STORE_PRODUCT_DETAILS,
  ERROR_PRODUCT_DETAILS,
} from "../constants/productsConstants";

export const getProductsList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_LIST });
    const { data } = await axios.get("/api/products");
    dispatch({ type: STORE_PRODUCTS_LIST, data: data });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT_LIST,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: STORE_PRODUCT_DETAILS, data: data });
  } catch (error) {
    dispatch({
      type: ERROR_PRODUCT_DETAILS,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
