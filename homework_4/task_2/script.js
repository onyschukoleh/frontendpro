document.getElementById("btn").addEventListener("click", () => {
  const number = prompt("Введіть тризначне число:");
  const a = number[0];
  const b = number[1];
  const c = number[2];
  console.log(`Введено  число із трьох цифр:    ${a}, ${b} та ${c},`);
  const allEqual = a === b && b === c;
  if (allEqual) {
    console.log(`У введеного числа всі цифри є однаковими: ${a} `);
    alert(`У введеного числа всі цифри є однаковими: ${a} `);
  } else {
    const hesEqual = a === b || b === c || a === c;
    if (hesEqual) {
      console.log(`Введене число містить однакові цифри`);
      alert(`Введене число містить однакові цифри`);
    } else {
      console.log(`У веденого числа всі цифри відрізняються`);
      alert(`У веденого числа всі цифри відрізняються`);
    }
  }
});
