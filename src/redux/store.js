import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";

import { shopSlice, cartSlice } from "./reducer";

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    cart: cartSlice.reducer,
  },
}, composeWithDevTools());

export default store;