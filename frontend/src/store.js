import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducer } from "./reducers/productReducers";

// redux thunk makes it possible to send ajax request in redux action
const initialState = {};

const reducer = combineReducers({
  productList: productListReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// enhancer makes it possible for redux to show in chrome developing tool
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
