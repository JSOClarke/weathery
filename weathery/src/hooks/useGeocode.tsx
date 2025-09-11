import { useEffect, useState } from "react";

interface useGeocodeProps {
  name: string;
}

export type useGeocodeData = {
  name: string;
  country: string;
  admin3: string;
  longitude: number;
  latitude: number;
};

export type useGeocodeResult = {
  data: useGeocodeData[] | null;
  error: Error | null;
  loading: boolean;
};

export function useGeocode({ name }: useGeocodeProps): useGeocodeResult {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    console.log("searchterm useGeocode ", name);

    async function load() {
      setLoading(true);
      try {
        const result = await fetch(
          `http://localhost:3000/api/search-location?name=${name}`
        );
        const jsonData = await result.json();

        const formattedData = jsonData.results.map((i) => ({
          name: i.name,
          country: i.country,
          admin3: i.admin3,
          longitude: i.longitude,
          latitude: i.latitude,
        }));

        if (!ignore) {
          setData(formattedData);
        }
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
  }, [name]);

  console.log("data", data);

  return { data, error, loading };
}
