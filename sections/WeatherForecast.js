function displayWeatherForecast(city) {
  const preselectLoc = localStorage.getItem("city");
  const weatherForecastEndpoint = getForecastEndpoint(city);

  fetch(weatherForecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const { list } = data;
      //console.log(list);
      const weatherForecastContainer =
        document.querySelector(".weather-forecast");
      weatherForecastContainer.innerHTML = "";

      let forecastPerDay = {};

      list.forEach((weatherInfo) => {
        const { dt } = weatherInfo;

        const day = getDayOfTheWeek(dt);

        if (forecastPerDay[day] !== undefined) {
          forecastPerDay[day].push(weatherInfo);
        } else {
          forecastPerDay[day] = [weatherInfo];
        }
      });

      console.log(forecastPerDay);

      for (const property in forecastPerDay) {
        const dayOfTheWeek = property;
        const forecastList = forecastPerDay[property];

        weatherForecastContainer.innerHTML += `<h2 class="dayForecast">${dayOfTheWeek}</h2>`;
        forecastList.forEach((forecast) => {
          const { dt, main, weather } = forecast;
          const day = getDayOfTheWeek(dt);
          const hours = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          weatherForecastContainer.innerHTML += `
            <div class="oneWeather">
              <span><b>${preselectLoc}</b></span></br>
              <span>${day}</span></br>

              <div class="detailsWeatherLvl1">
                <span>${hours}</span>
                <img src="${weatherIcon}" alt="" />
                
                <div class="detailsWeatherLvl2">
                  <strong color="red">${temperature} °C</strong>
                  <span>${weatherDescription}! </span>
                  <span> Senzație reală: ${realFeel}°C</span>
                </div>
              </div>
            </div>
          `;
        });
      }
    });
}

const data = {
  list: [{}, {}, {}],
  //....
};

// MAP (dictionar) - un obiect
const dataMapped = {
  Miercuri: [{}, {}, {}, {}],
  Joi: [{}],
  Vineri: [{}],
  //....
};
