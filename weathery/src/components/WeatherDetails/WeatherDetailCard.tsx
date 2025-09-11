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
    <div className="bg-[#262540] flex w-full  items-center justify-center rounded-xl h-32 md:h-full ">
      {data !== undefined && (
        <>
          <h1 className="text-white">{type}</h1>
          <h2 className="text-red-500">
            {(type === "Humidity" && data?.relative_humidity_2m) ||
              (type === "Feels Like" && data?.temperature) ||
              (type === "Wind" && data?.wind_speed_10m) ||
              (type === "Precipitation" && data?.rain)}
          </h2>
        </>
      )}
    </div>
  );
}
