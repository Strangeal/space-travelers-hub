import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

const initialState = {
  rockets: [],
  status: null,
};

export const rocketFetch = createAsyncThunk('rockets/rocketFetch', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = response.json();
  return data;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    rocketBooking: (state, action) => {
      const myState = state;
      const newState = myState.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });
      myState.rockets = newState;
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
        // IsSucessful.rockets = action.payload;

        const rocketData = [];
        action.payload.map((rocket) => rocketData.push({
          id: rocket.id,
          rocketName: rocket.rocket_name,
          rocketDesc: rocket.description,
          rocketImages: rocket.flickr_images,
          reserved: false,
        }));
        IsSucessful.rockets = rocketData;
      })
      .addCase(rocketFetch.rejected, (state) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
      });
  },
});

export const { rocketBooking } = rocketSlice.actions;

export default rocketSlice.reducer;
