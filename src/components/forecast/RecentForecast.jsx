import { useSelector } from "react-redux";
import { formatDateTime } from "../../utils";

const RecentForcast = () => {
  const forecastData = useSelector((state) => state.forecast.forecast);

  return (
    <div
      className={`relative min-h-42 lg:min-h-[calc((100vh-145px)/2.4)] bg-white rounded-lg col-span-12 lg:col-start-3 lg:col-end-13 lg:order-3 overflow-hidden flex justify-start sm:col-start-1 sm:col-end-7 pt-4 ${forecastData ? "pb-0" : "pb-4"} text-blue-700 order-3`}
    >
      <div className="relative flex flex-col justify-between w-full">
        {forecastData ? (
          <>
            <h2 className="text-base font-semibold mb-2 text-center">
              5 Day Weather Forecast
            </h2>
            <div className="w-full flex justify-between items-center overflow-x-scroll gap-4 px-2 thin-scrollbar">
              {forecastData.list.map((data, index) => (
                <div
                  key={index}
                  className="w-32 h-40 lg:48 flex-shrink-0 bg-blue-50 rounded shadow-lg hover:shadow-2xl hover:bg-blue-100 transition-all duration-500 ease-in-out flex flex-col items-center justify-center"
                >
                  <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                    alt={`${data.name} icon`}
                    width={36}
                    height={36}
                  />
                  <p className="px-2 py-2">{data.main.temp}</p>
                  <p className="px-2 py-2 flex flex-col">
                    <span>{formatDateTime(data.dt_txt).date}</span>
                    <span>{formatDateTime(data.dt_txt).time}</span>
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-center text-black">No data available</p>
        )}
      </div>
    </div>
  );
};

export default RecentForcast;
