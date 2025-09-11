import ResultCard from "./ResultCard";
import { useState } from "react";
import type { useGeocodeData, useGeocodeResult } from "../../hooks/useGeocode";

import { useGeocode } from "../../hooks/useGeocode";

export type Coordinates = {
  longitude: number;
  latitude: number;
};

export type LocationTitle = {
  name: string;
  country: string;
};

export type LocationData = {
  coordinates: Coordinates;
  locationTitle: LocationTitle;
};

interface SearchBoxProps {
  setLocation: (location: LocationData) => void;
}

export default function Searchbox({ setLocation }: SearchBoxProps) {
  const [input, setInput] = useState<string>();
  const [confirmedInput, setConfirmedInput] = useState<string>("");
  const { data, loading, error } = useGeocode<useGeocodeResult>({
    name: confirmedInput,
  });

  function handleSearchClick() {
    if (input == undefined) throw new Error("No name entered");

    setConfirmedInput(input);
  }

  function handleLocationClick(i: useGeocodeData) {
    const newCoordinates: LocationData = {
      coordinates: {
        longitude: i.longitude,
        latitude: i.latitude,
      },
      locationTitle: {
        name: i.name,
        country: i.country,
      },
    };
    setLocation(newCoordinates);
    console.log("button clicked");
  }

  console.log("searchinput", input);
  console.log("confirmedinput", confirmedInput);
  console.log("data", data);
  return (
    <div className="flex gap-2 md:flex-row flex-col w-full md:items-center md:justify-center ">
      <input
        type="search"
        value={input}
        placeholder="Search for a place..."
        className="bg-gray-900  rounded-xl p-2 text-white "
        onChange={(e) => setInput(e.target.value)}
      />

      {data !== null &&
        data.map((i) => {
          return (
            <button onClick={() => handleLocationClick(i)}>
              <ResultCard data={i} />
            </button>
          );
        })}

      <button
        className="search__button md:bg-purple-500 bg-blue-500 flex-row rounded-xl px-4 py-2 hover:bg-red-500 text-white cursor-pointer"
        onClick={() => handleSearchClick()}
      >
        Search
      </button>
    </div>
  );
}
