const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const arad = document.querySelector(".dropdown-menu .arad");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const clujNapoca = document.querySelector(".dropdown-menu .cluj-napoca");
const sanmartin = document.querySelector(".dropdown-menu .sanmartin");
const rontau = document.querySelector(".dropdown-menu .rontau");
const hidiseludejos = document.querySelector(".dropdown-menu .hidiseludejos");
const lazareni = document.querySelector(".dropdown-menu .lazareni");
const balnaca = document.querySelector(".dropdown-menu .balnaca");
const cortina_D_Ampezzo = document.querySelector(".dropdown-menu .cortina-dAmpezzo");

function updateCurrentCity(city) {
  // Selectam spatiul de pe ecran dedicat afisarii orasului curent si ii adaugam continut.
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  // Actualizam orasul din localStorage.
  localStorage.setItem("city", city);
  // Actualizam orasul afisat pe ecran.
  updateCurrentCity(city);
  // Reafisam vremea curenta, pentru noul oras.
  displayCurrentWeather(city);
  displayWeatherForecast(city);
}

// Adauagam event listenerii pe butoanele din dropdown.
bucharest.addEventListener("click", function () {
  updateWeather("București");
});
timisoara.addEventListener("click", function () {
  updateWeather("Timișoara");
});
oradea.addEventListener("click", function () {
  updateWeather("Oradea");
});
arad.addEventListener("click", function () {
  updateWeather("Arad");
});
sibiu.addEventListener("click", function () {
  updateWeather("Sibiu");
});
clujNapoca.addEventListener("click", function () {
  updateWeather("Cluj-Napoca");
});
sanmartin.addEventListener("click", function () {
  updateWeather("Sânmartin");
});
rontau.addEventListener("click", function () {
  updateWeather("Rontău");
});
hidiseludejos.addEventListener("click", function () {
  updateWeather("Hidișelu de Jos");
});
lazareni.addEventListener("click", function () {
  updateWeather("Lăzăreni");
});
balnaca.addEventListener("click", function () {
  updateWeather("Bălnaca");
});
cortina_D_Ampezzo.addEventListener("click", function () {
  updateWeather("Cortina d'Ampezzo, IT");
});
