document.getElementById("btn").addEventListener("click", () => {
  function removeChars(str, chars) {
    return str
      .split("")
      .filter((char) => !chars.includes(char))
      .join("");
  }
  const userString = prompt("Введіть рядок:");
  const charsToRemove = prompt(
    "Введіть символи для видалення через кому (наприклад: l,d)",
  );
  const charsArray = charsToRemove.split(",");

  const result = removeChars(userString, charsArray);

  alert(`Результат: ${result}`);
  console.log(result);
});
