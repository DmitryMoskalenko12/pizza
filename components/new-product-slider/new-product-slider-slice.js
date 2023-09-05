import { createSlice } from "@reduxjs/toolkit";
import { newSliderProductData } from "@/dummy-data/dummy-data";

const initialState = {
  data: newSliderProductData
}

const newProductSlider = createSlice({
  name:'newProductSlider',
  initialState,
  reducers: { 
    getNewProduct: (state, action) => {
    state.data = action.payload
  }
}
})

const {actions, reducer} = newProductSlider;

export const { getNewProduct } = actions;

export default reducer;