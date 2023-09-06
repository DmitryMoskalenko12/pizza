import { createSlice } from "@reduxjs/toolkit";
import { stockData } from "@/dummy-data/dummy-data";

const initialState = {
  data: stockData
}

const pasta1Slice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    getStockData: (state, action) => {
      state.data = action.payload
    }
  }
})

const {actions, reducer} = pasta1Slice;

export const {getStockData} = actions;
export default reducer;