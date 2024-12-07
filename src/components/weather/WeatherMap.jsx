import { useSelector } from "react-redux";

const WeatherMap = () => {
  const weatherData = useSelector((state) => state.weather.weather);

  return (
    <div className="min-h-60 bg-white rounded-lg shadow-lg overflow-hidden col-span-12 lg:col-span-6 sm:order-1 flex justify-center items-center">
      {weatherData ? (
        <iframe
          src={`https://embed.windy.com/embed2.html?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&zoom=8&level=surface&overlay=temperature&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=${weatherData.coord.lat}&detailLon=${weatherData.coord.lon}&metricWind=default&metricTemp=default&radarRange=-1`}
          width="100%"
          height="100%"
          title="Weather Map"
          className="w-full h-full"
        ></iframe>
      ) : (
        <p className="text-center">
          Search for a city to see weather information or load your current
          location weather data
        </p>
      )}
    </div>
  );
};

export default WeatherMap;
