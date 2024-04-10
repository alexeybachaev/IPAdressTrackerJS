export async function getAdress(ip = "8.8.8.8") {
  const response = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=b09ccbe2432643c8bd4af11cd07d5538&ip=${ip}`
  );
  return await response.json();
}
