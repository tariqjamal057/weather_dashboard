import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import citiesSlice from "./slices/weather/cities";
import weatherReducer from "./slices/weather/weather";
import addforecastData from "./slices/weather/forecast";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cities: citiesSlice,
    weather: weatherReducer,
    forecast: addforecastData,
  },
});
