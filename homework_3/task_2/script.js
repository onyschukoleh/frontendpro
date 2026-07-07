document.getElementById("btn").addEventListener("click", () => {
  const str1 = prompt("Введіть Прізвище:");

  const str2 = prompt("Введіть Ім'я:");

  const str3 = prompt("Введіть По-батькові:");
  if (str1 !== null || str2 !== null || str3 !== null) {
    console.log(`Введено: ${str1} ${str2} ${str3}`);
    alert(`Введено: ${str1} ${str2} ${str3}`);
  }
});
