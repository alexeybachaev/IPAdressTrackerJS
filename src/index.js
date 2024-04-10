import "babel-polyfill";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { validateIp, addTileLayer, getAdress, addOffset } from "./modules";
import icon from "../images/icon-location.svg";

const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector("button");

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

var markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
  //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
});

const ipInfo = document.querySelector("#ip");
const locationInfo = document.querySelector("#location");
const timezoneInfo = document.querySelector("#timezone");
const ispInfo = document.querySelector("#isp");

const mapArea = document.querySelector(".map");
const map = L.map(mapArea, {
  center: [51.505, -0.09],
  zoom: 13,
});
addTileLayer(map);
// L.marker([51.505, -0.09], { icon: markerIcon }).addTo(map);

function getData() {
  if (validateIp(ipInput.value)) {
    getAdress(ipInput.value).then(setInfo);
  }
}

function handleKey(e) {
  if (e.key == "Enter") getData();
}

function setInfo(mapData) {
  const lat = mapData.latitude;
  const lng = mapData.longitude;

  ipInfo.innerText = mapData.ip;
  locationInfo.innerText = mapData.country_name + " " + mapData.city;
  timezoneInfo.innerText = mapData.time_zone.offset + ":00";
  ispInfo.innerText = mapData.isp;
  console.log(mapData);

  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);

  addOffset(map);
}

if (matchMedia("max-width:1023px)").matches) {
  addOffset(map);
}

document.addEventListener("DOMContentLoaded", () => {
  getAdress("102.22.22.1").then(setInfo);
});
