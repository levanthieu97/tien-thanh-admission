import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
  selectionCourse: ''
};

export const registerModalSlice = createSlice({
  name: 'registerModalSlice',
  initialState,
  reducers: {
    openModal: (state, {payload}) => {
      state.isOpen = true;
      state.selectionCourse = payload
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectionCourse = '';
    }
  },
});

export const { openModal, closeModal } = registerModalSlice.actions;

export default registerModalSlice.reducer;