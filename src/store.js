import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "slices/cartSlice";

const reducer = combineReducers({
  cart: cartSlice,
});

export const store = configureStore({
  reducer
});