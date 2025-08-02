import React, { JSX } from "react";

type WeatherCardProps = {
  className?: string;
  icon: JSX.Element;
  header: string;
  value: string;
  description: string;
};
const WeatherCard = ({
  className,
  icon,
  header,
  value,
  description,
}: WeatherCardProps) => {
  return (
    <div
      className={`p-2 rounded bg-gray-100 flex flex-col items-end jus gap-y-2 col-span-1 ${className}`}
    >
      <p className="flex items-center gap-1">
        {React.cloneElement(icon, {})}
        <span>{header}</span>
      </p>
      <p>{value}</p>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
