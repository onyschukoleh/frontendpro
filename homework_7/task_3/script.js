document.getElementById("btn").addEventListener("click", () => {
  function removeElement(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) {
      array.splice(index, 1);
    }

    return array;
  }

  const array = [1, 2, 3, 4, 5];

  console.log("Початковий масив:", array);
  const item = Number(prompt("Введіть елемент, який потрібно видалити"));
  console.log("елемент, який потрібно видалити:", item);

  const result = removeElement(array, item);

  alert(`Результат: ${result.join(", ")}`);
  console.log("Результат:", result);
});
