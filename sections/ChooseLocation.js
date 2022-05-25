const bucharestOption = document.querySelector(".dropdown-item.bucharest");
const timisoaraOption = document.querySelector(".dropdown-item.timisoara");
const oradeaOption = document.querySelector(".dropdown-item.oradea");

function handleOptionClick(city) {
  const currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = city;
  displayCurrentWeather(city);
  localStorage.setItem("city", city);
}

timisoaraOption.addEventListener("click", function () {
  handleOptionClick("Timișoara");
});
bucharestOption.addEventListener("click", function () {
  handleOptionClick("București");
});
oradeaOption.addEventListener("click", function () {
  handleOptionClick("Oradea");
});
