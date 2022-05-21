console.log("curent weather.js");

function displayCurrentWeather() {
  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((currentWeatherData) => {
      console.log(currentWeatherData);
      const cityName = currentWeatherData.name;
      const unixUtc = currentWeatherData.dt;
      const weekDay = getWeekDay(unixUtc);
      const hours = getHours(unixUtc);
      const iconCode = currentWeatherData.weather[0].icon;
      const iconSrc = getWeatheIconSrc(iconCode);
      const description = currentWeatherData.weather[0].description;
      const windSpeed = meterPerSecToKmPerH(currentWeatherData.wind.speed);

      const currentWeatherSection = document.querySelector(".current-weather");
      currentWeatherSection.innerHTML = `
      <h3>${cityName}</h3>
      <strong>${weekDay}</strong>
      <span> ${hours}</span>
      <img src="${iconSrc}" alt="">
      <p>${description}</p>
      <p>${windSpeed} Km/h </p>
      `;
    });
}
