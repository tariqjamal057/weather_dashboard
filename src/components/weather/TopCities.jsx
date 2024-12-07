import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import WeatherApiService from "../../api/weather";
import { addWeatherData } from "../../redux/slices/weather/weather";
import ForecastApiService from "../../api/forecast";
import { addforecastData } from "../../redux/slices/weather/forecast";
import { IoReload } from "react-icons/io5";
import { Link } from "react-router";

const TopCities = () => {
  const cities = useSelector((state) => state.cities.cities);
  const weatherData = useSelector((state) => state.weather.weather);

  const [topCityData, setTopCityData] = useState([]);
  const dispatch = useDispatch();
  const handleCityWeather = async (city) => {
    if (city.trim() !== "") {
      try {
        const data = await WeatherApiService.getWeatherByCity(city);
        const forecastData = await ForecastApiService.getForcastByCoordinates(
          data.coord.lat,
          data.coord.lon
        );
        dispatch(addforecastData(forecastData));
        dispatch(addWeatherData(data));
      } catch (err) {
        alert(err);
      }
    }
  };

  const fetchWeatherData = async (forceReload = false) => {
    try {
      if (Object.keys(cities).length > 0) {
        const cachedData = localStorage.getItem("topCitiesWeather");
        const lastFetchTime = localStorage.getItem("lastFetchTime");
        const currentTime = new Date().getTime();

        const currentTopCities = Object.entries(cities)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([city]) => city);

        const cachedCitiesList = cachedData
          ? JSON.parse(cachedData).map((city) => city.name)
          : [];

        // Add forceReload to update conditions
        const needsUpdate =
          forceReload ||
          !cachedData ||
          currentTime - parseInt(lastFetchTime) >= 3600000 ||
          !currentTopCities.every((city) => cachedCitiesList.includes(city));

        if (!needsUpdate) {
          setTopCityData(JSON.parse(cachedData));
          return;
        }

        const weatherPromises = currentTopCities.map((city) =>
          WeatherApiService.getWeatherByCity(city)
        );

        const results = await Promise.all(weatherPromises);
        setTopCityData(results);

        localStorage.setItem("topCitiesWeather", JSON.stringify(results));
        localStorage.setItem("lastFetchTime", currentTime.toString());
      }
    } catch (error) {
      alert("Error fetching weather data: ", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();

    return () => {};
  }, [cities]);

  return (
    <div className="relative min-h-42 lg:min-h-[calc((100vh-145px)/2.15)] bg-white rounded-lg col-span-12 lg:col-span-3 lg:order-2 overflow-hidden flex justify-start sm:col-start-7 sm:col-end-13 p-4 text-blue-700">
      <div className="relative flex flex-col justify-between w-full">
        <div className="">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold mb-2">Popular Cities</h2>
            <div className="flex justify-between items-center gap-x-2">
              <button onClick={() => fetchWeatherData(true)}>
                <IoReload />
              </button>
              <Link to={"/saved"}>view all</Link>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <tbody>
              {topCityData.length > 0 ? (
                <>
                  {topCityData.map((data, index) => (
                    <tr className="bg-white" key={index}>
                      <td className="px-2 py-2">
                        <img
                          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                          alt={`${data.name} icon`}
                          width={36}
                          height={36}
                        />
                      </td>
                      <td className="px-2 py-2">{data.name}</td>
                      <td className="px-2 py-2">{data.weather[0].main}</td>
                      <td
                        className={`${!weatherData || weatherData.id === data.id} ? "cursor-not-allowed": ""}`}
                      >
                        <button
                          onClick={() => {
                            if (weatherData && weatherData.id !== data.id) {
                              handleCityWeather(data.name);
                            } else if (!weatherData) {
                              handleCityWeather(data.name);
                            }
                          }}
                          className="bg-blue-700 hover:bg-blue-800 transition-colors duration-200 p-2 rounded text-white hover:text-gray-100"
                        >
                          <FaArrowRight />
                        </button>
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <p className="text-black">No data available</p>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopCities;
