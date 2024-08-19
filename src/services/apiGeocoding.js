export async function getAddressFromGeocode({lat, long }) {
  const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude${lat}&longitude=${long}`)

  if(!res.ok) throw Error("Failed getting address")
  
  const data = await res.json();
  return data
}