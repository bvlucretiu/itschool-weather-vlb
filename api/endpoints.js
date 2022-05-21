const API_KEY = "8f936ed8b428828089878f4f2885f49d";
const city = "București";

const querryParams = `q=${city}&appid=${API_KEY}&units=metric&lang=ro`;
const currentWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?${querryParams}`;
