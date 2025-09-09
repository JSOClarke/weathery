import WeatherBackdropLarge from "../../assets/images/bg-today-large.svg";
import WeatherBackdropSmall from "../../assets/images/bg-today-small.svg";

export default function Weathercard() {
  return (
    <div
      className="weathercard__container relative bg-cover bg-center h-64 rounded-xl p-4 flex text-white items-center justify-between"
      style={{ backgroundImage: `url(${WeatherBackdropLarge})` }}
    >
      <div className="flex-col">
        <h1 className="place text-2xl ">Berlin, Germany</h1>
        <h2 className="date font-light ">Tuesday, Aug 5 2025</h2>
      </div>
      <h1 className="temperature text-7xl">20°</h1>
    </div>
  );
}
