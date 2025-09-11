interface ForecastCardProps {
  temperature: number;
  time: Date;
}

export default function ForecastCard({ temperature, time }: ForecastCardProps) {
  function timeFormatter(time: Date): string {
    const hours = time.getHours().toString();
    if (Number(hours) < 12) return hours + "AM";
    if (Number(hours) >= 12) return hours + "PM";
    return hours.toString();
  }
  return (
    <div className="rounded-xl flex-1 flex flex-row text-white items-center justify-between p-4 bg-[#302F4A] ">
      <h2 className="forecast__temperature">{timeFormatter(time)}</h2>

      <h1 className="forecast__time">{`${temperature.toFixed(2)}°`}</h1>
    </div>
  );
}
