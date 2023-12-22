"use strict";

/////////////////////////////////////////////////
// SELECTORS
/////////////////////////////////////////////////
const year = document.querySelector(".year");
const mapChecker = document.querySelector("#map");

/////////////////////////////////////////////////
// NAVIGATION
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// FOOTER
/////////////////////////////////////////////////

const date = new Date();
const currentYear = date.getFullYear();
year.textContent = currentYear;

/////////////////////////////////////////////////
// CONTACT PAGE
/////////////////////////////////////////////////
if (mapChecker) {
  const map = L.map("map").setView([14.599512, 120.984222], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([14.599512, 120.984222])
    .addTo(map)
    .bindPopup("Manila, Philippines")
    .openPopup();
}
