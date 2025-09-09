import DailyForecastCard from "./components/DailyForecast/DailyForecastCard";
import Header from "./components/Header";
import Herobar from "./components/Herobar";
import Searchbox from "./components/search/Searchbox";
import Weathercard from "./components/Weathercard/Weathercard";
import WeatherDetailCard from "./components/WeatherDetails/WeatherDetailCard";
import Forecast from "./Forecast/Forecast";

function App() {
  return (
    <div className="app w-[100vw] h-[100vh] bg-[#02012c] px-30 py-10 flex flex-col">
      <Header />
      <Herobar />
      <div className="searchbox__container flex items-end justify-center m-5">
        <Searchbox />
      </div>
      <div className=" flex-1 flex flex-row gap-2 ">
        <div className="flex w-[80%] flex-col gap-2">
          <Weathercard />
          <div className="weather__details-container flex flex-1 flex-row  gap-2">
            <div className="flex flex-1">
              <WeatherDetailCard />
            </div>
            <div className="flex flex-1">
              <WeatherDetailCard />
            </div>
            <div className="flex flex-1">
              <WeatherDetailCard />
            </div>
            <div className="flex flex-1">
              <WeatherDetailCard />
            </div>
          </div>
          <h1 className="text-white ">Daily Forecast</h1>
          <div className="flex-row flex justify-between gap-2 mt-2">
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>{" "}
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>
            <div className="flex flex-1">
              <DailyForecastCard />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;
