let currentCityLS = localStorage.getItem("city");
if (currentCityLS === null) {
  currentCityLS = "București";
}

const currentCity = document.querySelector("#current-city");
currentCity.innerHTML = currentCityLS;

displayCurrentWeather(currentCityLS);
