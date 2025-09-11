import ForecastCard from "./ForecastCard";
import { useState } from "react";
import { days } from "../../constants/constant";
import { type HourlyRes } from "../../services/weatherApi";

interface ForecastProps {
  data: HourlyRes[] | null;
  loading: boolean;
}

export default function Forecast({ data, loading }: ForecastProps) {
  const currentDay = new Date().getDay() ?? 0;

  const [selectedDay, setSelectedDay] = useState<number>(currentDay);

  console.log("selectedDay", selectedDay);

  return (
    <div className=" flex h-full flex-col gap-2 rounded-xl p-4 ">
      <div className="top_container flex items-center justify-between">
        <h1 className="forecast__title text-white ">Hourly Forecast</h1>
        <select
          name="days"
          id="days"
          className="bg-[#3c3b5c] rounded-xl text-white p-4"
          value={selectedDay}
          onChange={(e) => setSelectedDay(Number(e.target.value))}
        >
          {days.map((day, idx) => {
            return (
              <option key={idx} value={idx} className="text-white">
                {day}
              </option>
            );
          })}
        </select>
      </div>

      {!loading &&
        data !== null &&
        data !== undefined &&
        data
          .filter((i) => i.time.getDay() === selectedDay)
          .map((i, idx) => {
            return (
              <div key={idx}>
                <ForecastCard temperature={i.temperature} time={i.time} />
              </div>
            );
          })}
    </div>
  );
}
