import type { CurrentRes } from "../../services/weatherApi";

interface WeatherDetailCardProps {
  type: "Feels Like" | "Humidity" | "Wind" | "Precipitation";
  data: CurrentRes | null;
}

export default function WeatherDetailCard({
  type,
  data,
}: WeatherDetailCardProps) {
  return (
    <div className="bg-[#262540] flex w-full flex-col  items-center justify-center rounded-xl h-32 md:h-full ">
      {data !== undefined && (
        <>
          <h1 className="text-white text-2xl">{type}</h1>
          <h2 className="text-white font-thin ">
            {(type === "Humidity" && data?.relative_humidity_2m + "%") ||
              (type === "Feels Like" && data?.temperature + "°") ||
              (type === "Wind" && data?.wind_speed_10m + "kmh") ||
              (type === "Precipitation" && data?.rain + "mm")}
          </h2>
        </>
      )}
    </div>
  );
}
