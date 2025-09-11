import type { useGeocodeData } from "../../hooks/useGeocode";

interface ResultCardProps {
  data: useGeocodeData;
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="result__card flex flex-row items-center justify-between rounded-xl bg-white text-black p-2">
      <h1 className="result__title ">{data.name}</h1>
      <h1 className="result__country ">{data.country}</h1>
      <h1 className="result__admin3  ">{data.admin3}</h1>
    </div>
  );
}
