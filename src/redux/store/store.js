import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './reducer/greetSlice';

export const store = configureStore({
  reducer: {
    message: greetReducer,
  },
});

export default store;
