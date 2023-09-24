import {createSlice} from '@reduxjs/toolkit';
import {CustomerStateType} from '../../types/AppTypes';

const initialState: CustomerStateType = {
  customerList: [],
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
    },
    signup: (state, action) => {
      state.customerList = action.payload?.customerList;
      state.currentUser = action.payload?.user;
    },
    editUser: (state, action) => {
      state.customerList = action.payload?.customerList;
      state.currentUser = action.payload?.currentUser;
    },
    logout: state => {
      state.currentUser = null;
    },
    addUser: (state, action) => {
      state.currentUser = action.payload?.currentUser;
      state.customerList = action.payload?.customerList;
    },
  },
});
export const {login, signup, logout, editUser, addUser} = authSlice.actions;
export const authReducer = authSlice.reducer;
