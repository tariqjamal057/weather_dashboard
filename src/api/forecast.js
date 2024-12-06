import axios from "axios";

class ForecastApiService {
  static #API_URL = import.meta.env.VITE_API_BACKEND_URL;


  static async getForcastByCoordinates(lat, lon) {
    try {
      const response = await axios.get(`${this.#API_URL}/forecast`, {
        params: { lat, lon },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to fetch weather data";
    }
  }

}

export default ForecastApiService;
