import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) { state.products.push(action.payload) },
    removeProduct(state, action) {
      state.products = state.products.filter((product) => product.id !== action.payload)
    },
    increaseQuantity(state, action) {
      state.products.forEach((product, index) => {
        if (product.id === action.payload) state.products[index].quantity += 1
      })
    },
    decreaseQuantity(state, action) {
      state.products.forEach((product, index) => {
        if (product.id === action.payload) state.products[index].quantity -= 1
      })
    },
    clearCart(state) { state.products = [] },
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
