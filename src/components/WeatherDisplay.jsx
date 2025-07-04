import React from "react";
import { WiStrongWind, WiThermometer, WiDaySunny } from "react-icons/wi";

const WeatherDisplay = ({ data, unit }) => {
  if (!data) return null;

  const temperatureUnit = unit === "metric" ? "°C" : "°F";
  const windUnit = unit === "metric" ? "m/s" : "mph";

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-3xl shadow-xl text-gray-800 space-y-6">
      <h2 className="text-2xl font-semibold text-center text-blue-900">
        Current Weather
      </h2>

      {/* Temperature */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <WiThermometer className="text-5xl text-red-500" />
          <p className="text-5xl font-bold">
            {data.temp} {temperatureUnit}
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-1">Feels like today</p>
      </div>

      {/* Location */}
      <div className="text-center text-lg font-medium text-gray-700">
        📍 {data.city || "Unknown Location"}
      </div>

      {/* Conditions & Wind */}
      <div className="flex flex-col sm:flex-row justify-between px-2">
        <div className="flex items-center gap-1">
          <WiDaySunny className="text-4xl text-yellow-400" />
          <p className="text-lg capitalize font-medium">{data.description}</p>
        </div>
        <div className="flex items-center gap-1">
          <WiStrongWind className="text-4xl text-blue-900" />
          <p className="text-lg font-medium">
            {data.windSpeed} {windUnit}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
