import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import UnitToggle from "./components/UnitToggle";
import WeatherDisplay from "./components/WeatherDisplay";
import RecentSearches from "./components/RecentSearches";
import ErrorBanner from "./components/ErrorBanner";
import image from "./assets/sun-6235_256.gif";

import { useEffect, useState } from "react";

const App = () => {
  const [unit, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [recent, setRecent] = useState([]);
  const [currentCity, setCurrentCity] = useState("");
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    if (!currentCity) return;

    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=${unit}&appid=${API_KEY}`
        );

        if (!res.ok) {
          throw new Error("City not found");
        }

        const data = await res.json();

        setWeather({
          temp: data.main.temp,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          city: data.name, 
        });
        console.log("Weather data set:", {
          temp: data.main.temp,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          city: data.name,
        });

        setError("");
      } catch (error) {
        console.error("Error fetching weather:", error.message);
        setWeather(null);
      }
    };

    fetchWeather();
  }, [currentCity, unit]);

  const handleSearch = (city) => {
    setCurrentCity(city);
    setRecent((prev) => {
      const updated = [city, ...prev.filter((c) => c !== city)].slice(0, 5);
      return updated;
    });
    console.log("Searching for:", city);
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorBanner message={error} />}

      <div className="flex flex-col md:flex-row gap-2 mt-8 px-4 md:px-10 justify-center">
        {/* Left Section: GIF */}
        <div className="md:w-1/2 flex justify-center py-4">
          <img
            src={image}
            alt="Weather Animated Background"
            className="w-78 h-78 sm:w-80 sm:h-80 object-contain rounded-3xl"
          />
        </div>

        {/* Right Section: Content */}
        <div className="md:w-1/2 flex flex-col items-center gap-4 py-4">
          <UnitToggle
            unit={unit}
            onToggle={() =>
              setUnit((prev) => (prev === "metric" ? "imperial" : "metric"))
            }
          />
          {weather && <WeatherDisplay data={weather} unit={unit} />}
          <RecentSearches cities={recent} onSelect={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default App;
