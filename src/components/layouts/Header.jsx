import { useState } from "react";
import { GoSidebarCollapse, GoSidebarExpand } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebar";
import { addCity } from "../../redux/slices/weather/cities";
import { addWeatherData } from "../../redux/slices/weather/weather";
import WeatherApiService from "../../api/weather";
import { addforecastData } from "../../redux/slices/weather/forecast";
import ForecastApiService from "../../api/forecast";

const Header = () => {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const [city, setCity] = useState("");

  const handleSearch = async () => {
    if (city.trim() !== "") {
      try {
        const data = await WeatherApiService.getWeatherByCity(city);
        const forecastData = await ForecastApiService.getForcastByCoordinates(data.coord.lat, data.coord.lon)
        dispatch(addforecastData(forecastData))
        dispatch(addWeatherData(data));
        dispatch(addCity(data.name));
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <header className="flex justify-between items-center w-full rounded py-2 pb-2">
      <div className="flex items-center">
        <button
          onClick={() => dispatch(toggleSidebar())}
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <div className={`transition-transform duration-300`}>
            {isSidebarOpen ? (
              <GoSidebarExpand size={26} color="#1d4ed8" />
            ) : (
              <GoSidebarCollapse size={26} color="#1d4ed8" />
            )}
          </div>
        </button>
        <input
          type="search"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="ms-6 bg-white outline-none text-sm p-2 rounded lg:w-72"
        />
      </div>
      <div className="bg-blue-700 border border-neutral-100 rounded-full w-10 h-10 flex justify-center items-center text-white">
        U
      </div>
    </header>
  );
};

export default Header;
