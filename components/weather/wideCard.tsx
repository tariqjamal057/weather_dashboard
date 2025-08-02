import React, { JSX } from "react";

type WeatherCardProps = {
  className?: string;
  icon: JSX.Element;
  header: string;
  timing: string;
};
const WideWeatherCard = ({
  className,
  icon,
  header,
  timing,
}: WeatherCardProps) => {
  return (
    <div
      className={`p-2 py-6 md:py-2 rounded bg-gray-100 flex justify-between items-center gap-x-2 col-span-2 ${className}`}
    >
      {React.cloneElement(icon, { className: "text-yellow-400", size: 48 })}
      <div>
        <p className="text-lg font-semibold">{header}</p>
        <p className="text-sm">{timing}</p>
      </div>
    </div>
  );
};

export default WideWeatherCard;
