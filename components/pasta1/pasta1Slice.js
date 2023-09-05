import { createSlice } from "@reduxjs/toolkit";
import { pasta1Data } from "@/dummy-data/dummy-data";

const initialState = {
  data: pasta1Data
}

const pasta1Slice = createSlice({
  name: 'pasta1',
  initialState,
  reducers: {
    getPastaData1: (state, action) => {
      state.data = action.payload
    }
  }
})

const {actions, reducer} = pasta1Slice;

export const {getPastaData1} = actions;
export default reducer;

