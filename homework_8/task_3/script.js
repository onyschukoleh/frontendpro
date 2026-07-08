document.getElementById("btn").addEventListener("click", () => {
  let count = 0;
  let lastNumber;

  function inputNumber() {
    count++;

    lastNumber = Number(prompt("Введіть число більше 100:"));

    if (lastNumber > 100) {
      console.log(`Введено число ${lastNumber} більше 100 на ${count} спробі`);
      return;
    }

    if (count >= 10) {
      console.log(`Вичерпано 10 спроб. Останнє введене число: ${lastNumber}`);
      return;
    }

    inputNumber();
  }

  inputNumber();
});
