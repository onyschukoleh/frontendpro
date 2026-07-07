document.getElementById("btn").addEventListener("click", () => {
  const number = prompt("Введіть п\'ятизначне число:");
  if (number.length == 5) {
    alert(
      `Введено  число із п\'ятьма цифрами:    ${number[0]}, ${number[1]},${number[2]},${number[3]},${number[4]},`,
    );
    console.log(
      `Введено  число із п\'ятьма цифрами:    ${number[0]}, ${number[1]},${number[2]},${number[3]},${number[4]},`,
    );
  } else {
    alert(`Введено некорректне чило !!!`);
    console.log(`Введено некорректне чило !!!`);
  }
});
