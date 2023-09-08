import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketArr: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getBasketProduct: (state, action) => {
      state.basketArr = [...state.basketArr, action.payload]
    },
    deleteProduct: (state, action) => {
      state.basketArr = state.basketArr.filter((item) => item.id !== action.payload);
    },
    updateCountProduct: (state, action) => {
      state.basketArr = action.payload;
    },
  }
})

const {actions, reducer} = basketSlice;

export const {getBasketProduct, deleteProduct, updateCountProduct} = actions;
export default reducer;