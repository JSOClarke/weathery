import { useEffect, useState } from "react";
import { weatherApi } from "../services/weatherApi";
import { type WeatherApiRes } from "../services/weatherApi";
import type { Coordinates } from "../components/Search/Searchbox";

export type UseWeatherResult = {
  data: WeatherApiRes | null;
  error: Error | null;
  loading: boolean;
};

export function useWeather({
  longitude,
  latitude,
}: Coordinates): UseWeatherResult {
  const [data, setData] = useState<WeatherApiRes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    let ignore = false;
    async function load() {
      setLoading(true);
      try {
        const result = await weatherApi({ longitude, latitude });
        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) setError(err as Error);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();

    return () => {
      ignore = true;
    };
  }, [longitude, latitude]);

  return { data, loading, error };
}
