import { createSlice } from "@reduxjs/toolkit";
import { decryptData, encryptData } from "../../../utils";

const initialState = {
  cities: (() => {
    try {
      const storedData = localStorage.getItem("searchedCities");
      if (!storedData) return {};

      return decryptData(storedData) || {};
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
        const encryptedData = encryptData(state.cities);
        localStorage.setItem("searchedCities", encryptedData);
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
