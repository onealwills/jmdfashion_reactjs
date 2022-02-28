import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

// dispatching action
export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  //   setitem accepts 2 parameter, the key and the value being a string. get access to the cartitems in redux store use getState() from redux thunk
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
