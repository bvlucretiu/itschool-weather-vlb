// API Key-urile NU ar trebui sa fie stocate in format text, nu este sigur.
// Din pacate, fara un server, nu avem cum sa fim 100% safe, dar API-ul fiind gratuit, in cel mai rau caz cineva ne va bloca aplicatia temporar.
// API-UL RAZVAN  ea3e3338d6a2f4fe6d246649169f3479
const API_KEY = "8f936ed8b428828089878f4f2885f49d";
// API-UL meu 8f936ed8b428828089878f4f2885f49d
// Construim link-urile (andpoint-urile) serverelor de la care vom primi date.
function getCurrentWeatherEndpoint(city) {
  // Intotdeauna, cand folosim un API, putem obtine informatii extra prin query params.
  // lang=ro => Rezultatele vin in romana.
  // units=metric => Unitatea de masura va fi grade celsius.
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
