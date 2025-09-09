import ForecastCard from "./ForecastCard";

export default function Forecast() {
  return (
    <div className="bg-[#262540] flex flex-col gap-2 rounded-xl p-4">
      <h1 className="forecast__title text-white ">Hourly Forecast</h1>
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />
      <ForecastCard />

      <ForecastCard />
    </div>
  );
}
