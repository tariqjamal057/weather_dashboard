import CurrentWeather from "../components/weather/CurrentWeather";
import WeatherMap from "../components/weather/WeatherMap";
import TopCities from "../components/weather/TopCities";
import UnderConstruction from "../components/UnderConstruction";
import useDocumentTitle from "../components/layouts/useDocumentTitle";

const Dashboard = () => {
  useDocumentTitle("Weather App - Dashboard")
  return (
    <div className="min-h-[calc(100vh-145px)] mt-3">
      <div className="grid grid-cols-12 gap-2">
        <CurrentWeather />
        <WeatherMap />
        <TopCities />
        <UnderConstruction botton_container={true} />
      </div>
    </div>
  );
};

export default Dashboard;
