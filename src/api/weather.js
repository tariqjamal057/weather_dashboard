import axios from "axios";

class ApiService {
  static #API_URL = 'http://localhost:5000/api';

  static async getWeatherByCity(cityName) {
    try {
      const response = await axios.get(`${this.#API_URL}/weather`, {
        params: { city: cityName }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch weather data';
    }
  }

  static async getWeatherByCoordinates(lat, lon) {
    try {
      const response = await axios.get(`${this.#API_URL}/weather`, {
        params: { lat, lon }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data?.message || 'Failed to fetch weather data';
    }
  }

  static async getCurrentLocationWeather() {
    return new Promise((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const data = await this.getWeatherByCoordinates(latitude, longitude);
              resolve(data);
            } catch (error) {
              reject(error);
            }
          },
          (error) => reject("Location access denied")
        );
      } else {
        reject("Geolocation not supported");
      }
    });
  }
}

export default ApiService;
