import { CART_ADD_ITEM } from "../constants/cartConstants";

// reducer to respond to actions
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      //   if i have a product with this i.d in the cart "existitem"
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        //   if it exist replace the item in the cart with "item" else use the previous "x"
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        //   concatenate ...state.cartItems with the new "item"
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};
