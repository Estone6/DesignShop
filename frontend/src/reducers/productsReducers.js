import {
  GET_PRODUCTS_LIST,
  STORE_PRODUCTS_LIST,
  ERROR_PRODUCT_LIST,
  GET_PRODUCT_DETAILS,
  STORE_PRODUCT_DETAILS,
  ERROR_PRODUCT_DETAILS,
} from "../constants/productsConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS_LIST:
      return { loading: true, products: [] };
    case STORE_PRODUCTS_LIST:
      return { loading: false, products: action.data };
    case ERROR_PRODUCT_LIST:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_DETAILS:
      return { loading: true, ...state };
    case STORE_PRODUCT_DETAILS:
      return { loading: false, product: action.data };
    case ERROR_PRODUCT_DETAILS:
      return { loading: false, error: action.error };
    default:
      return state;
  }
};
