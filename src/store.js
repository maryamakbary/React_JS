import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { info, basket, address, basket2 } from "./reducer";

const reducers = combineReducers({ info, basket, basket2, address });

const middleWare = [thunk];

const userInfo = JSON.parse(localStorage.getItem("info")) || {};
const localBasket = JSON.parse(localStorage.getItem("basket")) || [];
const localBasket2 = JSON.parse(localStorage.getItem("basket2")) || [];
const localAddress = JSON.parse(localStorage.getItem("address")) || {};

const initialState = {
  info: userInfo,
  basket: localBasket,
  basket2: localBasket2,
  address: localAddress,
};
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleWare)
);
export default store;
