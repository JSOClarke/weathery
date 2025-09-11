export type DailyRes = {
  time: Date;
  weather_code: number;
  temperature_2m_mean: number;
};

export type HourlyRes = {
  time: Date;
  temperature: number;
};

export type WeatherApiRes = {
  dailyRes: DailyRes[];
  hourlyRes: HourlyRes[];
  currentRes: CurrentRes[];
};

export type CurrentRes = {
  time: Date;
  temperature: number;
  rain: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
};

export async function weatherApi() {
  // fetch the actual data
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_mean&hourly=temperature_2m&current=temperature_2m,rain,weather_code,wind_speed_10m,apparent_temperature,relative_humidity_2m,surface_pressure&timezone=GMT"
  );
  if (!res.ok) throw new Error("Fetch response failed");

  const json = await res.json();

  const rawHourData = {
    temperature: json.hourly.temperature_2m,
    time: json.hourly.time,
  };
  const rawDailyData = {
    time: json.daily.time,
    weather_code: json.daily.weather_code,
    temperature_2m_mean: json.daily.temperature_2m_mean,
  };

  const rawCurrentData = {
    time: json.current.time,
    temperature: json.current.temperature_2m,
    rain: json.current.rain,
    wind_speed_10m: json.current.wind_speed_10m,
    relative_humidity_2m: json.current.relative_humidity_2m,
  };

  const hourlyRes: HourlyRes[] = rawHourData.time.map((i, idx) => ({
    time: new Date(i),
    temperature: rawHourData.temperature[idx],
  }));

  const dailyRes: DailyRes[] = rawDailyData.time.map((i, idx) => ({
    time: new Date(i),
    weather_code: rawDailyData.weather_code[idx],
    temperature_2m_mean: rawDailyData.temperature_2m_mean[idx],
  }));

  const currentRes: CurrentRes[] = rawCurrentData.time.map((i, idx) => ({
    time: new Date(i),
    temperature: rawCurrentData.temperature[idx],
    rain: rawCurrentData.rain[idx],
    wind_speed_10m: rawCurrentData.wind_speed_10m[idx],
    relative_humidity_2m: rawCurrentData.relative_humidity_2m[idx],
  }));

  const response: WeatherApiRes = { dailyRes, hourlyRes, currentRes };

  return response;
}
