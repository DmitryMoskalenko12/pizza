import { createSlice } from "@reduxjs/toolkit";
import { basketSliderData } from "@/dummy-data/dummy-data";
import { saucesData } from "@/dummy-data/dummy-data";

const initialState = {
  basketArr: [],
  basketSliderData: basketSliderData,
  basketSaucesData: saucesData,
  basketFinalPrice: 0
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
    getFinalPrice: (state, action) => {
      state.basketFinalPrice = action.payload;
    },
  }
})

const {actions, reducer} = basketSlice;

export const {getBasketProduct, deleteProduct, updateCountProduct, getFinalPrice} = actions;
export default reducer;