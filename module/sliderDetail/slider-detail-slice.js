import { createSlice } from "@reduxjs/toolkit";
import { detailSliderData } from "@/dummy-data/dummy-data";

const initialState = {
  data: detailSliderData
}

const sliderDetail = createSlice({
  name:'sliderDetail',
  initialState,
  reducers: { 
    getNewProductDetail: (state, action) => {
    state.data = action.payload
  }
}
})

const {actions, reducer} = sliderDetail;

export const { getNewProductDetail } = actions;

export default reducer;