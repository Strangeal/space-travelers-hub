import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: null,
};

export const rocketFetch = createAsyncThunk(
  'rockets/rocketFetch',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/rockets');
    return response.data;
  },
);

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(rocketFetch.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(rocketFetch.fulfilled, (state, action) => {
        const IsSucessful = state;
        IsSucessful.status = 'success';
        IsSucessful.rockets = action.payload;
      })
      .addCase(rocketFetch.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export default rocketSlice.reducer;
