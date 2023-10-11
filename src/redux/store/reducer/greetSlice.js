import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  loading: false, // Add a loading state
};

export const fetchRandomGreeting = createAsyncThunk('greeting/fetchRandomGreeting', async (_, thunkAPI) => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.message; // Return the message to be handled by the fulfilled action
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const greetSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    clearGreet: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      state.message = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchRandomGreeting.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { clearGreet } = greetSlice.actions;
export default greetSlice.reducer;
