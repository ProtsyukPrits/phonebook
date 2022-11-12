import { createSlice } from "@reduxjs/toolkit";

const filtringInitialState = {
  filtred: '',
}

const filtringSlice = createSlice({
  name: "filtred",
  initialState: filtringInitialState,
  reducers: {
    filtringContactsUser: {
      reducer(state, action) {
      state.filtred = action.payload;
      }
    }
  }
})

export const {filtringContactsUser} = filtringSlice.actions
export  const filtringReducer = filtringSlice.reducer;