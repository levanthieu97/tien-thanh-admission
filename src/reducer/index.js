import { configureStore } from '@reduxjs/toolkit';
import globalRuder from './slices/GlobalSlice';

const store = configureStore({
  reducer: {
    globalRuder: globalRuder,
  }
});

export default store;