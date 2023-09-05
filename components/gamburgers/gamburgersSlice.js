import { createSlice } from "@reduxjs/toolkit";
import { gamburgers } from "@/dummy-data/dummy-data";

const initialState = {
  data: gamburgers
}

const pasta1Slice = createSlice({
  name: 'gamburgers',
  initialState,
  reducers: {
    getGamburgersData: (state, action) => {
      state.data = action.payload
    }
  }
})

const {actions, reducer} = pasta1Slice;

export const {getGamburgersData} = actions;
export default reducer;
