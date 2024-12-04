import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./slices/sidebar";
import citiesSlice from "./slices/cities";
import weatherReducer from "./slices/weather/weather";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    cities: citiesSlice,
    weather: weatherReducer,
  },
});
