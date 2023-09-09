import { createSlice } from "@reduxjs/toolkit";
import { basketSliderData } from "@/dummy-data/dummy-data";
import { saucesData } from "@/dummy-data/dummy-data";

const initialState = {
  basketArr: [],
  basketSliderData: basketSliderData,
  basketSaucesData: saucesData
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