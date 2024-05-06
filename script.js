const openPopupButton = document.querySelector(".timetable-button");
const closePopupButton = document.querySelector(".close");
const popup = document.querySelector(".popup");
const maps = document.querySelector(".map");

const openPopup = () => {
  popup.classList.remove("hidden");
};
const closePopup = () => {
  popup.classList.add("hidden");
};

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);

// Inicjalizacja mapy
const map = L.map("map").setView([52.39880766106131, 20.931744687666964], 17);

// Dodanie mapy bazowej
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
}).addTo(map);

// Dodanie znacznika
L.marker([52.39880766106131, 20.931744687666964])
  .addTo(map)
  .bindPopup("Akademia Kształcenia Sportowego")
  .openPopup();
