import WeatherBackdropLarge from "../../assets/images/bg-today-large.svg";
import WeatherBackdropSmall from "../../assets/images/bg-today-small.svg";
import type { DailyRes } from "../../services/weatherApi";

interface WeathercardProps {
  data: DailyRes;
}

export default function Weathercard({ data }: WeathercardProps) {
  return (
    <div
      className="weathercard__container relative bg-cover bg-center h-64 h-full flex-1 rounded-xl p-4 flex text-white items-center justify-between"
      style={{ backgroundImage: `url(${WeatherBackdropLarge})` }}
    >
      <div className="flex-col">
        <h1 className="place text-2xl ">Berlin, Germany</h1>
        <h2 className="date font-light ">
          {data !== undefined &&
            data.time.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </h2>
      </div>
      <h1 className="temperature text-7xl">
        {data !== undefined && `${data.temperature_2m_mean}°`}
      </h1>
    </div>
  );
}
