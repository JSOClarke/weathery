import WeatherBackdropLarge from "../../assets/images/bg-today-large.svg";
import WeatherBackdropSmall from "../../assets/images/bg-today-small.svg";
import type { useGeocodeData } from "../../hooks/useGeocode";
import type { CurrentRes } from "../../services/weatherApi";
import type { LocationData, LocationTitle } from "../Search/Searchbox";

interface WeathercardProps {
  data: CurrentRes;
  locationTitle: LocationTitle;
}

export default function Weathercard({ data, locationTitle }: WeathercardProps) {
  console.log(data?.time);
  return (
    <div
      className="weathercard__container relative bg-cover bg-center w-full h-64 h-full flex-1 rounded-xl p-4 flex text-white items-center justify-between"
      style={{ backgroundImage: `url(${WeatherBackdropLarge})` }}
    >
      <div className="flex-col">
        <h1 className="place text-2xl ">
          {locationTitle !== null &&
            `${locationTitle?.name},${locationTitle?.country}`}
        </h1>
        <h2 className="date font-light ">
          {data !== undefined &&
            new Date(data?.time).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
        </h2>
      </div>
      <h1 className="temperature text-3xl">
        {data !== undefined && `${data.temperature}°`}
      </h1>
    </div>
  );
}
