function displayWeatherForecast(city) {
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

        weatherForecastContainer.innerHTML += `<h2>${dayOfTheWeek}</h2>`;
        forecastList.forEach((forecast) => {
          const { dt, main, weather } = forecast;

          const hours = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          weatherForecastContainer.innerHTML += `
            <div>
              <span>${hours}</span>
              <img src="${weatherIcon}" alt="" />
              <strong>${temperature} °C</strong>
              <span>${weatherDescription}</span>
              <span> Senzație reală: ${realFeel}°C</span>

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
