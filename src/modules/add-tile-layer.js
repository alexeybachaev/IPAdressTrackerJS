import L from "leaflet";
export function addTileLayer(map) {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    attribution: 'Coded by <a href="#">Alexey Bachaev</a>.',
    tileSize: 512,
    zoomOffset: -1,
  }).addTo(map);
  //"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=b09ccbe2432643c8bd4af11cd07d5538",
}
