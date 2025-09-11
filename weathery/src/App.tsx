import DailyForecastCard from "./components/DailyForecast/DailyForecastCard";
import Header from "./components/Header";
import Herobar from "./components/Herobar";
import Searchbox, { type LocationData } from "./components/Search/Searchbox";
import Weathercard from "./components/Weathercard/Weathercard";
import WeatherDetailCard from "./components/WeatherDetails/WeatherDetailCard";
import Forecast from "./components/Forecast/Forecast";
import { useWeather } from "./hooks/useWeather";
import { type UseWeatherResult } from "./hooks/useWeather";
import { weatherCodes } from "./constants/constant";
import { type Coordinates } from "./components/Search/Searchbox";
import { useState } from "react";

import { useGeocode } from "./hooks/useGeocode";
function App() {
  const [location, setLocation] = useState<LocationData>({
    coordinates: {
      latitude: 51.46839,
      longitude: -0.36092,
    },
    locationTitle: {
      name: "Jordan",
      country: "London",
    },
  });

  const { data, loading, error } = useWeather<UseWeatherResult>(
    location.coordinates
  );
  if (!loading) {
    console.log("data", data);
  }

  const geocodeRes = useGeocode({ name: "brentford" });

  console.log(geocodeRes.data);

  return (
    <div className="app w-[100vw] min-h-[100vh] md:h-[100vh] bg-[#02012c] md:px-30 md:py-10 p-4 flex flex-col">
      <Header />
      <div className="flex items-end justify-center md:mb-10 ">
        <Herobar />
      </div>
      <div className="searchbox__container flex items-end justify-center my-10">
        <Searchbox setLocation={setLocation} />
      </div>
      <div className=" flex-1 flex md:flex-row gap-2 md:gap-10 flex-col  ">
        <div className="flex md:w-[80%] flex-col gap-2 md:gap-10">
          <div className="md:h-[750px] flex ">
            <Weathercard
              data={data?.currentRes}
              locationTitle={location.locationTitle}
            />
          </div>
          <div className="weather__details-container md:flex  md:h-64 grid grid-cols-2 md:flex-row gap-2 md:gap-10 ">
            <div className="flex flex-1 ">
              <WeatherDetailCard type="Feels Like" data={data?.currentRes} />
            </div>
            <div className="flex flex-1">
              <WeatherDetailCard type="Humidity" data={data?.currentRes} />
            </div>
            <div className="flex flex-1">
              <WeatherDetailCard type="Precipitation" data={data?.currentRes} />
            </div>
            <div className="flex flex-1">
              <WeatherDetailCard type="Wind" data={data?.currentRes} />
            </div>
          </div>
          <h1 className="text-white ">Daily Forecast</h1>
          <div className="md:flex-row md:flex md:flex-1 justify-between gap-2  grid grid-cols-3  md:gap-10">
            {data?.dailyRes.map((day, idx) => {
              return (
                <div className="flex flex-1" key={idx}>
                  <DailyForecastCard
                    time={day.time}
                    weatherCode={day.weather_code}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-1  bg-[#262540] overflow-y-auto md:max-h-[1100px] no-scrollbar">
          <Forecast data={data?.hourlyRes} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
