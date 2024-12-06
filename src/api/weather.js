import axios from "axios";

class WeatherApiService {
  static #API_URL = import.meta.env.VITE_API_BACKEND_URL;

  static async getWeatherByCity(cityName) {
    try {
      const response = await axios.get(`${this.#API_URL}/weather`, {
        params: { city: cityName },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to fetch weather data";
    }
  }

  static async getWeatherByCoordinates(lat, lon) {
    try {
      const response = await axios.get(`${this.#API_URL}/weather`, {
        params: { lat, lon },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || "Failed to fetch weather data";
    }
  }

  static async getCurrentLocationWeather() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const data = await this.getWeatherByCoordinates(
                latitude,
                longitude
              );
              resolve(data);
            } catch (error) {
              reject(error);
            }
          },
          () => reject("Location access denied")
        );
      } else {
        reject("Geolocation not supported");
      }
    });
  }
}

export default WeatherApiService;
