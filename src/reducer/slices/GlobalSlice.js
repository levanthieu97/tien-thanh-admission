import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isWait: true,
  locale: 'us',
  filterOpen: false,
  value: 0
};

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = globalSlice.actions;

export default globalSlice.reducer;