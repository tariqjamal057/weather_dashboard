import React from 'react'
import { RiSunFoggyLine } from "react-icons/ri";


const ForecastCard = () => {
  return (
    <div className='flex flex-col gap-y-4 shadow rounded p-2 justify-center items-center bg-gray-50 min-w-52'>
        <h3>Coimbatore</h3>
        <RiSunFoggyLine size={50} />
        <div className='flex flex-row justify-center items-end gap-x-4'>
                <p>25°/28°</p>
                <p className='text-lg font-semibold'>25°</p>
                <p className='text-sm'>Mostly Sunny</p>
        </div>
    </div>
  )
}

export default ForecastCard