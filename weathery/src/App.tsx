import DailyForecastCard from "./components/DailyForecast/DailyForecastCard";
import Header from "./components/Header";
import Herobar from "./components/Herobar";
import Searchbox from "./components/Search/Searchbox";
import Weathercard from "./components/Weathercard/Weathercard";
import WeatherDetailCard from "./components/WeatherDetails/WeatherDetailCard";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="app w-[100vw] min-h-[100vh] md:h-[100vh] bg-[#02012c] md:px-30 md:py-10 p-4 flex flex-col">
      <Header />
      <div className="flex items-end justify-center md:mb-10 ">
        <Herobar />
      </div>
      <div className="searchbox__container flex items-end justify-center my-10">
        <Searchbox />
      </div>
      <div className=" flex-1 flex md:flex-row gap-2 md:gap-10 flex-col  ">
        <div className="flex md:w-[80%] flex-col gap-2 md:gap-10">
          <div className="md:h-[750px] flex ">
            <Weathercard />
          </div>
          <div className="weather__details-container md:flex  md:h-64 grid grid-cols-2 md:flex-row gap-2 md:gap-10 ">
            <div className="flex flex-1 ">
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
          <div className="md:flex-row md:flex md:flex-1 justify-between gap-2  grid grid-cols-3 gap-2 md:gap-10">
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
