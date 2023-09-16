import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
  phone: ''
}

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.name = action.payload
    },
    getPhone: (state, action) => {
      state.phone = action.payload
    }
  }
})

const {actions, reducer} = registrationSlice;
export default reducer;
export const {getName, getPhone} = actions;