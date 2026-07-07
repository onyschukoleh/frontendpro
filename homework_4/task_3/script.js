document.getElementById("btn").addEventListener("click", () => {
  const birthYear = prompt("Введіть Ваш рік народження:");
  let ageMessage;
  if (birthYear == null) {
    alert(`Шкода що Ви не захотіли ввести дату народження :(`);
    ageMessage = "Ваш вік невідомий :(";
  } else {
    ageMessage = `Ваш вік:  ${new Date().getFullYear() - Number(birthYear)}`;
  }

  let placeMessage;
  const palce = prompt("Введіть Ваш місто проживання:");
  if (palce == null) {
    alert(`Шкода що Ви не захотіли ввести місто проолживання :(`);
    placeMessage = "Ваше місто проолживання невідоме :(";
  } else {
    placeMessage =
      "Ви проживаєте " +
      ((palce.toLowerCase() === "київ" && "у столиці України: ") ||
        (palce.toLowerCase() === "вашингтон" && "у столиці США: ") ||
        (palce.toLowerCase() === "лондон" && "у столиці Англіїї: ") ||
        `у ${palce}`);
  }

  let sportMessage;
  const sport = prompt("Введіть Ваш улюблений вид спорту:");
  if (sport == null) {
    alert(`Шкода що Ви не захотіли ввести Ваш улюблений вид спорту :(`);
    sportMessage = "Ваш улюблений вид спорту невідомий :(";
  } else {
    sportMessage =
      (sport.toLowerCase() === "футбол" && "Круто! Хочеш стати Мессі ") ||
      (sport.toLowerCase() === "баскетбол" &&
        "Круто! Хочеш стати Джорданом ") ||
      (sport.toLowerCase() === "бокс" && "Круто! Хочеш стати Усиком") ||
      `Ваш улюблений вид спорту ${sport} `;
  }

  alert(`${ageMessage} \n` + `${placeMessage} \n` + `${sportMessage} \n`);
});
