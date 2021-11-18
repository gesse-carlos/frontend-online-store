import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryID: '',
  query: '',
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategory(state, action) { state.categoryID = action.payload },
    setQuery(state, action) { state.query = action.payload },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice;