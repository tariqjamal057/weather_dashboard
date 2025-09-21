import React from "react";
import RecentForecast from "../forcast/RecentForecast";
import PopularCity from "../cities/PopularCity";
import { RiSunFoggyLine } from "react-icons/ri";


const Forecast = () => {
  return <div className="flex flex-col gap-y-2 w-full h-full">
    <RecentForecast />
  </div>;
};

export default Forecast;
