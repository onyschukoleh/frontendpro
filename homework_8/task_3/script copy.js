const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let lastNumber;

function inputNumber() {
  count++;

  rl.question("Введіть число більше 100: ", (answer) => {
    lastNumber = Number(answer);

    if (lastNumber > 100 || count >= 10) {
      console.log(`Останнє введене число: ${lastNumber}`);
      rl.close();
      return;
    }

    inputNumber();
  });
}

inputNumber();
