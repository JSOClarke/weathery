export async function geocodeApi({ params }: any) {
  const res = await fetch(`http://localhost:3000/api/search-location?`);
  if (!res.ok) throw new Error("Failed to fetch geocode");
  return res.json();
}
