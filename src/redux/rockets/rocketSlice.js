import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  status: null,
};

export const rocketFetch = createAsyncThunk('rockets/rocketFetch', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = response;
  const rocketsInfo = data.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    rocketDesc: rocket.description,
    rocketImages: rocket.flickr_images,
    reserved: false,
  }));
  return rocketsInfo;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketBooking: (state, action) => {
      const newRockets = [];
      state.rockets.forEach((rocket) => {
        if (rocket.id === action.payload) {
          newRockets.push({ ...rocket, reserved: !rocket.reserved });
        }
        newRockets.push({...rocket});
      });
      console.log(newRockets);
      return {rockets: newRockets, status:null};
      // console.log("no");
    },
  },
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

export const { rocketBooking } = rocketSlice.actions;

export default rocketSlice.reducer;