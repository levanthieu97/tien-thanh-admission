import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './slices/GlobalSlice';
import registerModalSlice from './slices/RegisterModalSlice';

const store = configureStore({
  reducer: {
    globalSlice: globalSlice,
    registerModalSlice: registerModalSlice
  }
});

export default store;