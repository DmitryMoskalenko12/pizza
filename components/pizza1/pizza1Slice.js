import { createSlice } from "@reduxjs/toolkit";
import { pizza1Data } from "@/dummy-data/dummy-data";

const initialState = {
  data: pizza1Data
}

const pasta1Slice = createSlice({
  name: 'pizza1',
  initialState,
  reducers: {
    getPizzaData1: (state, action) => {
      state.data = action.payload
    }
  }
})

const {actions, reducer} = pasta1Slice;

export const {getPizzaData1} = actions;
export default reducer;