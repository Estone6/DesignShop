import axios from "axios";
import { CART_ADD_ITEM, REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    data: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  console.log("action", id);
  dispatch({
    type: REMOVE_ITEM,
    data: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
