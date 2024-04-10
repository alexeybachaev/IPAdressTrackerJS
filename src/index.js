const ipInput = document.querySelector(".search-bar__input");
const btn = document.querySelector("button");

btn.addEventListener("click", getData);
ipInput.addEventListener("keydown", handleKey);

function getData() {
  //проверка данных
  fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=b09ccbe2432643c8bd4af11cd07d5538&ip=${ipInput.value}`
  )
    .then((response) => response.json())
    .then(console.log);
}

function handleKey(e) {
  if (e.key == "Enter") getData();
}
