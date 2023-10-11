import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

const greetSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    setGreet: (state, action) => {
      state.message = action.payload;
    },
    clearGreet: (state) => {
      state.message = '';
    },
  },
});

export const { setGreet, clearGreet } = greetSlice.actions;
export default greetSlice.reducer;
