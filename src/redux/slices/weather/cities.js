import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: (() => {
    try {
      const storedData = localStorage.getItem("searchedCities");
      if (!storedData) return {};

      return JSON.parse(storedData) || {};
    } catch (error) {
      alert("Error loading cities from localStorage:", error);
      return {};
    }
  })(),
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action) => {
      const city = action.payload;
      state.cities[city] = (state.cities[city] || 0) + 1;
      try {
        localStorage.setItem("searchedCities", JSON.stringify(state.cities));
      } catch (error) {
        alert("Error saving cities to localStorage:", error);
      }
    },
    clearCities: (state) => {
      state.cities = {};
      localStorage.removeItem("searchedCities");
    },
  },
});

export const { addCity, clearCities } = citiesSlice.actions;
export default citiesSlice.reducer;
