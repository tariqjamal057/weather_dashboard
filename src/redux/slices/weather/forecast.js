import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  forecast: null,
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    addforecastData: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { addforecastData } = forecastSlice.actions;
export default forecastSlice.reducer;
