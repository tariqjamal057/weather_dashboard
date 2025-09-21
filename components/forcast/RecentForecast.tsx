import React from 'react'
import ForecastCard from './card'
import { RiSunFoggyLine } from "react-icons/ri";


const RecentForecast = () => {
  return (
    <div className='w-full p-4 rounded shadow-md bg-white h-full'>
        <h2 className="text-lg font-semibold">10 Days Forecast</h2>
        <div className='flex gap-x-4 overflow-x-scroll thin-scrollbar'>
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
            <ForecastCard />
        </div>
    </div>
  )
}

export default RecentForecast