import { createSlice } from "@reduxjs/toolkit";
import CryptoJS from "crypto-js";

const initialState = {
  cities: (() => {
    try {
      const storedData = localStorage.getItem("searchedCities");
      if (!storedData) return [];

      const decryptedData = CryptoJS.AES.decrypt(
        storedData,
        "yourSecretKey"
      ).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData) || [];
    } catch (error) {
      console.error("Error loading cities from localStorage:", error);
      return [];
    }
  })(),
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    addCity: (state, action) => {
      const city = action.payload;
      if (!state.cities.includes(city)) {
        state.cities.push(city);
        try {
          const encryptedData = CryptoJS.AES.encrypt(
            JSON.stringify(state.cities),
            "yourSecretKey"
          ).toString();
          localStorage.setItem("searchedCities", encryptedData);
        } catch (error) {
          console.error("Error saving cities to localStorage:", error);
        }
      }
    },
    clearCities: (state) => {
      state.cities = [];
      localStorage.removeItem("searchedCities");
    },
  },
});

export const { addCity, clearCities } = citiesSlice.actions;
export default citiesSlice.reducer;
