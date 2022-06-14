import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSmallLayout: window.innerWidth <= 767,
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setSmallLayout: (state, {payload}) => {
      state.isSmallLayout = payload;
    }
  },
});

export const { setSmallLayout } = globalSlice.actions;

export default globalSlice.reducer;