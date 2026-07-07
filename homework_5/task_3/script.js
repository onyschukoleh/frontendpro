document.getElementById("btn").addEventListener("click", () => {
  const N = prompt("Введіть ціле число N:");

  if (isNaN(N) || N < 1) {
    console.log("Будь ласка, введіть коректне додатне число.");
  } else {
    console.log(`Цілі числа від 1 до 100, квадрат яких не перевищує ${N}:`);

    for (let i = 1; i <= 1000; i += 1) {
      if (i * i > N) {
        break;
      }
      console.log(`Квадрат числа ${i} не перевищує число N: ${i * i} < ${N}`);
    }
  }
});
