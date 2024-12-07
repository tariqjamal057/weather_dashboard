import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdMyLocation } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addCity } from "../../redux/slices/weather/cities";
import { addWeatherData } from "../../redux/slices/weather/weather";
import WeatherApiService from "../../api/weather";
import ForecastApiService from "../../api/forecast";
import { addforecastData } from "../../redux/slices/weather/forecast";

const CurrentWeather = () => {
  const [time, setTime] = useState();
  const weatherData = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  const handleLocationWeather = async () => {
    try {
      const data = await WeatherApiService.getCurrentLocationWeather();
      const forecastData = await ForecastApiService.getForcastByCoordinates(
        data.coord.lat,
        data.coord.lon
      );
      dispatch(addforecastData(forecastData));
      dispatch(addWeatherData(data));
      dispatch(addCity(data.name));
    } catch (error) {
      alert("Error getting location: " + error);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      if (!weatherData) return;

      // Get the current time in UTC
      const now = new Date();
      const utcTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

      // Adjust the UTC time by the weather data's timezone offset
      const localTime = new Date(
        utcTime.getTime() + weatherData.timezone * 1000
      );

      setTime(
        localTime.toLocaleString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [weatherData]);

  return (
    <div className="relative min-h-42 lg:min-h-[calc((100vh-145px)/2.15)] bg-white rounded-lg col-span-12 lg:col-span-3 overflow-hidden flex justify-start sm:col-start-1 sm:col-end-7 px-2 py-2 lg:py-0 lg:px-0 text-blue-700">
      {!weatherData ? (
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <p className="text-center text-black">
            Search for a city to see weather information
          </p>
          <button
            onClick={handleLocationWeather}
            className="flex items-center gap-2 bg-blue-700 text-sm text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            <MdMyLocation size={16} />
            Use My Location
          </button>
        </div>
      ) : (
        <div className="relative flex flex-col justify-between w-full p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-base text-black font-semibold">Today</h2>
            <div className="flex flex-col justify-center items-start">
              <span className="text-sm capitalize">{weatherData.name}</span>
              <span className="text-sm capitalize">{time}</span>
            </div>
          </div>
          <div className="flex justify-between items-center my-3">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt=""
              width={80}
              height={80}
            />
            <div className="flex flex-col justify-between items-start">
              <span className="text-4xl lg:text-3xl font-bold">
                {weatherData.main.temp}°C
              </span>
              <p>
                {weatherData.weather[0].main} <span></span>
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-sm opacity-80">Humidity</p>
              <p className=" font-semibold">{weatherData.main.humidity}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-80">Wind</p>
              <p className=" font-semibold">
                {Math.round(weatherData.wind.speed * 3.6)} km/h
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm opacity-80">Pressure</p>
              <p className=" font-semibold">{weatherData.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
