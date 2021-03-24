import { CART_ADD_ITEM, REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.data;
      const itemExist = state.cartItems.find((x) => x.product === item.product);
      if (itemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === itemExist.product ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case REMOVE_ITEM:
      console.log("reducer", action.data);
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.data),
      };
    default:
      return state;
  }
};
