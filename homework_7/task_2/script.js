document.getElementById("btn").addEventListener("click", () => {
  function calculateAverage(arr) {
    const numbers = arr.filter((item) => typeof item === "number");

    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return numbers.length ? sum / numbers.length : 0;
  }

  const input = prompt(
    "Введіть елементи через кому (наприклад: 10, hello, 20, true, 30, null, 40)",
  );

  const array = input.split(",").map((item) => {
    item = item.trim();

    return !isNaN(item) && item !== "" ? Number(item) : item;
  });

  const average = calculateAverage(array);

  alert(`Середнє арифметичне: ${average}`);
  console.log("Масив:", array);
  console.log("Середнє арифметичне:", average);
});
