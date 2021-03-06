function getDayOfTheWeek(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);
  // Extragem ziua saptamanii, sub forma de index.
  const dayIndex = date.getDay();

  // console.log("date.toLocaleDateString():", date.toLocaleDateString());

  let day;

  switch (dayIndex) {
    case 0:
      // day = "Duminică";
      day = `Duminică - ${date.toLocaleDateString()}`;
      break;
    case 1:
      // day = "Luni";
      day = `Luni - ${date.toLocaleDateString()}`;
      break;
    case 2:
      // day = "Marți";
      day = `Marți - ${date.toLocaleDateString()}`;
      break;
    case 3:
      // day = "Miercuri";
      day = `Miercuri - ${date.toLocaleDateString()}`;
      break;
    case 4:
      // day = "Joi";
      day = `Joi - ${date.toLocaleDateString()}`;
      break;
    case 5:
      // day = "Vineri";
      day = `Vineri - ${date.toLocaleDateString()}`;
      break;
    case 6:
      // day = "Sâmbătă";
      day = `Sâmbătă - ${date.toLocaleDateString()}`;
      break;
    default:
      // Aruncam o eroare daca index-ul nu este valid (nu ar trebui sa se ajunga vreodata aici).
      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }

  // Retunam ziua echivalenta indexului.
  return day;
}

function getHour(utc) {
  // Pentru a crea o data, pornind la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai.
  const date = new Date(utc * 1000);
  // Extragem ora. Daca ora are o valoare mai mica de 10, ii adaugam un 0.
  let hours = date.getHours();
  if (hours < 10) {
    hours = "Ora: 0" + hours;
  } else {
    hours = "Ora: " + hours;
  }
  // Extragem minutele. Daca minutele au o valoare mai mica de 10, le adaugam un 0.
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  // Returnam ora, sub formatul dorit.
  return `${hours}:${minutes}`;
}
