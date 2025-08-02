import WeatherCard from "@/components/weather/card";
import WideWeatherCard from "@/components/weather/wideCard";
import { IoLocationOutline } from "react-icons/io5";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { LuWind } from "react-icons/lu";
import { PiDrop } from "react-icons/pi";
import { RiSunFoggyLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export default function Home() {
  const currentDate = new Date();
  const dayName = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="grid place-items-center bg-gray-100 grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 shadow-md rounded w-full h-full flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-x-1 p-2 bg-blue-100 rounded-full text-sm">
            <IoLocationOutline className="" />
            <span>Coimbatore</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <div>
            <h1 className="text-4xl font-bold mt-2">{dayName}</h1>
            <p className="text-gray-600">{formattedDate}</p>
          </div>
          <div className="flex items-start gap-x-2 flex-1 pt-10 justify-between">
            <IoLocationOutline size={100} />
            <div className="flex flex-col justify-between items-start gap-y-8">
              <p>25°C</p>
              <div>
                <p>Heavy Rains</p>
                <p>Feels like 30°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded w-full h-full">
        <h2 className="text-lg font-semibold">Today's Highlight</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <WeatherCard
            className="order-1 md:order-1"
            icon={<LuWind />}
            header="Wind Status"
            value="90 km/h"
            description="9:00 AM"
          />
          <WeatherCard
            className="order-2 md:order-2"
            icon={<PiDrop />}
            header="Humidity"
            value="80%"
            description="Good"
          />
          <WideWeatherCard
            className="order-5 md:order-3"
            icon={<FiSunrise />}
            header="Sunrise"
            timing="06:00 AM"
          />
          <WeatherCard
            className="order-3 md:order-4"
            icon={<RiSunFoggyLine />}
            header="UV Index"
            value="4 UV"
            description="Moderate UV"
          />
          <WeatherCard
            className="order-4 md:order-5"
            icon={<MdOutlineRemoveRedEye />}
            header="Visibility"
            value="9 km"
            description="9:00 AM"
          />
          <WideWeatherCard
            className="order-6 md:order-6"
            icon={<FiSunset />}
            header="Sunset"
            timing="06:00 PM"
          />
        </div>
      </div>
      <div className="bg-white p-4 shadow-md rounded w-full h-full">Card 3</div>
      <div className="bg-white p-4 shadow-md rounded w-full h-full">Card 4</div>
    </div>
  );
}
