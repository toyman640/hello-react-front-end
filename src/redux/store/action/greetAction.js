import { createAsyncThunk } from '@reduxjs/toolkit';
import { setGreet } from '../reducer/greetSlice';

const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async (_, { dispatch }) => {
  const response = await fetch('/random_message');
  const data = await response.json();
  dispatch(setGreet(data.message));
});

export default fetchRandomGreeting;
