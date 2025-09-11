import { weatherCodes } from "../../constants/constant";

interface DailyForecastCardProps {
  time: Date;
  weatherCode: number;
}

export default function DailyForecastCard({
  time,
  weatherCode,
}: DailyForecastCardProps) {
  return (
    <div className="text-white h-40 md:h-full w-full  bg-[#302F4A] rounded-xl flex items-center justify-center flex-col">
      <h1>
        {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(time)}
      </h1>
      <h2>{weatherCodes.find((i) => i.code === weatherCode)?.description}</h2>
    </div>
  );
}
