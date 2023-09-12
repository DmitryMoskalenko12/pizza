import { createSlice } from "@reduxjs/toolkit";
import { stockCardData } from "@/dummy-data/dummy-data";

const initialState = {
  data: stockCardData
}


const stockCardDataSlice = createSlice({
  name: 'stockDataCard',
  initialState,
  reducers: {

  }
})

const {actions, reducer} = stockCardDataSlice;

export default reducer;