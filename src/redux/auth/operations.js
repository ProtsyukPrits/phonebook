import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from 'notiflix';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

 const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

 const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
} 

export const register = createAsyncThunk(
  'auth/register',
  async (credentials) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return Notiflix.Notify.info('We have some error, please try again. Maybe you need correct  you email ;)')
    }
  }
)

//

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials) => {
    try {
      const res = await axios.post('/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return Notiflix.Notify.info('We have some error, please try again!!!');
    }
  }
)

//

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)


//

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();  
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
