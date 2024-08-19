import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import { categorySlice } from "../features/menu/categorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    [categorySlice.reducerPath]: categorySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categorySlice.middleware),
})

export default store



