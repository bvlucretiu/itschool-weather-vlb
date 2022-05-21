function getWeatheIconSrc(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

function meterPerSecToKmPerH(metersPerSec) {
  return Math.round((metersPerSec * 18) / 5);
}
