import { createSlice } from '@reduxjs/toolkit';
import { refresh, logIn, logOut, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    },
    [refresh.pending](state) {
      state.isRefreshing = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refresh.rejected](state) {
      state.isRefreshing = false;
    }
  },
});


export const authReducer = authSlice.reducer;