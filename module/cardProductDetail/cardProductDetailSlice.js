import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null
}

const cardProductDetailSlice = createSlice({
  name: 'cardDetail',
  initialState,
  reducers: {
    getId: (state, action) => {
      state.id = action.payload
    }
  }
})

const {actions, reducer} = cardProductDetailSlice;

export const {getId} = actions;
export default reducer;