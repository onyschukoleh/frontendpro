document.getElementById("btn").addEventListener("click", () => {
  const user = {
    name: prompt("Введіть ім'я"),
    age: prompt("Введіть вік"),
    city: prompt("Введіть місто"),

    showInfo() {
      // if (user.name == null) {
      //   alert(`Шкода що Ви не захотіли ввести ваша ім'я :(`);
      // }
      // if (user.age == null) {
      //   alert(`Шкода що Ви не захотіли ввести ваш вік :(`);
      // }
      // if (user.name == null) {
      //   alert(`Шкода що Ви не захотіли ввести ваше місто :(`);
      // }
      console.log(
        `Ім'я: ${user.name}\n` + `Вік: ${user.age}\n` + `Місто: ${user.city}`,
      );
      alert(
        `Ім'я: ${user.name}\n` + `Вік: ${user.age}\n` + `Місто: ${user.city}`,
      );
    },
  };

  user.showInfo();
});
