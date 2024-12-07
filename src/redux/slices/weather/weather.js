import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    addWeatherData: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { addWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
