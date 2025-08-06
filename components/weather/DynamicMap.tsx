// import { useSelector } from "react-redux";

const DynamicMap = () => {
  //   const weatherData = useSelector((state) => state.weather.weather);

  return (
    <iframe
      src={`https://embed.windy.com/embed2.html?lat=10.9974&lon=76.9589&zoom=8&level=surface&overlay=temperature&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=10.9974&detailLon=76.9589&metricWind=default&metricTemp=default&radarRange=-1`}
      width="100%"
      height="100%"
      title="Weather Map"
      className="w-full h-full"
    ></iframe>
  );
};

export default DynamicMap;
