import {createSlice} from '@reduxjs/toolkit';
import {NotificationStateType} from '../../types/AppTypes';

const initialState: NotificationStateType = {
  notificationList: [],
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notificationList = [action?.payload, ...state.notificationList];
    },
    deleteNotification: (state, action) => {
      state.notificationList = action.payload;
    },
    clearAllNotification: state => {
      state.notificationList = [];
    },
  },
});
export const {addNotification, clearAllNotification, deleteNotification} =
  notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;
