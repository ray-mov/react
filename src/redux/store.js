import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import cartReducer from "./cartSlice"
import { categorySlice } from "../features/menu/categorySlice";
import { menuSlice } from "../features/menu/menuSlice";


const rootReducer = {
  user: userReducer,
  cart: cartReducer,
  [categorySlice.reducerPath]: categorySlice.reducer,
  [menuSlice.reducerPath]: menuSlice.reducer,
}

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(categorySlice.middleware)
      .concat(menuSlice.middleware)
  ,
})

export default store



