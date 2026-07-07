document.getElementById("btn").addEventListener("click", () => {
  const N = prompt("Введіть ціле число N:");

  if (isNaN(N) || N <= 1) {
    console.log(
      `Число ${N} не є простим. Будь ласка, введіть ціле число більше за 1.`,
    );
  } else {
    let check = true;

    // 3. Шукаємо дільники від 2 до квадратного кореня з числа
    for (let i = 2; i <= N - 1; i++) {
      if (N % i === 0) {
        check = false;
        break;
      }
    }

    // 4. Виводимо результат
    if (check) {
      console.log(`Число ${N} — є простим.`);
    } else {
      console.log(`Число ${N} — не є простим.`);
    }
  }
});
