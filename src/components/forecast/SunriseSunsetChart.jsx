import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { calculateDaylight } from "../../utils";

ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

const SunriseSunsetChart = () => {
  const forecastData = useSelector((state) => state.forecast.forecast);

  const chartData = {
    labels: ["Daylight Hours", "Night Hours"],
    datasets: [
      {
        data: forecastData
          ? [
              calculateDaylight(
                forecastData.city.sunrise,
                forecastData.city.sunset
              ).daylight,
              calculateDaylight(
                forecastData.city.sunrise,
                forecastData.city.sunset
              ).night,
            ]
          : [0, 0],
        backgroundColor: ["#eff6ff", "#1d4ed8"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    rotation: -90,
    circumference: 180,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.formattedValue} hours`,
        },
      },
    },
  };

  return (
    <div className="relative min-h-42 lg:min-h-[calc((100vh-145px)/2.4)] bg-white rounded-lg col-span-12 lg:col-start-1 lg:col-end-3 lg:order-2 overflow-hidden flex justify-start sm:col-start-1 sm:col-end-7 py-4 text-blue-700 order-3">
      <div className="relative flex flex-col justify-center items-center h-full w-full">
        {forecastData ? (
          <>
            <Doughnut data={chartData} options={options} />
            <div className="mt-4 text-center">
              <p className="font-medium">
                Sunrise:{" "}
                {new Date(
                  forecastData.city.sunrise * 1000
                ).toLocaleTimeString()}
              </p>
              <p className="font-medium">
                Sunset:{" "}
                {new Date(forecastData.city.sunset * 1000).toLocaleTimeString()}
              </p>
            </div>
          </>
        ) : (
          <p className="text-center text-black">No data available</p>
        )}
      </div>
    </div>
  );
};

export default SunriseSunsetChart;
