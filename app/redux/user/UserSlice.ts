import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {UserStateType} from '../../types/AppTypes';
import {fetchData} from '../../services';
import {errorMessages} from '../../constants';

const initialState: Omit<UserStateType, 'localUserList'> = {
  userList: [],
  userLoading: false,
  pageNo: 1,
  error: '',
};

export const fetchUser = createAsyncThunk(
  'users/fetchUser',
  async (page: number) => {
    const response = await fetchData('users?page=' + page);
    return response.data;
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    resetUserList: state => {
      state.userList = [];
      state.pageNo = 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.userLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.userLoading = false;
      state.userList = [...state.userList, ...action.payload];
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.userLoading = false;
      state.error = action.error.message ?? errorMessages.error;
    });
  },
});
export const userReducer = userSlice.reducer;
export const {setPageNo, resetUserList} = userSlice.actions;
