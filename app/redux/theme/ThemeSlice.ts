import {createSlice} from '@reduxjs/toolkit';

interface ThemeTypes {
  currentTheme: 'light' | 'dark';
  selectedTheme: 'default' | 'light' | 'dark';
}

const initialState: ThemeTypes = {
  currentTheme: 'light',
  selectedTheme: 'default',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.currentTheme = action.payload.currentTheme;
      state.selectedTheme = action.payload.selectedTheme;
    },
  },
});
export const {changeTheme} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
