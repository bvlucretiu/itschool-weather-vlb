function getWeekDay(unixUtc) {
  let date = new Date(unixUtc * 1000);
  let weekDay = date.getDay();
  console.log(weekDay);
  let day;
  switch (weekDay) {
    case 0:
      day = "Duminică";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
  }
  return day;
}

function getHours(unixUtc) {
  let date = new Date(unixUtc * 1000);

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const secounds = date.getSeconds();
  return `${hour}:${minutes}:${secounds}`;
}
// function timeIs(number) {
//   if (number < 10) {
//     number = "0" + number;
//   }
//   return number;
// }
