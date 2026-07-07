const result1 = [];
for (let i = 40; i <= 60; i++) {
  result1.push(i / 2);
}
console.log("for:  \n" + result1.join(" "));

const result2 = [];
let i = 20;

while (i <= 30) {
  result2.push(i);
  i = i + 0.5;
}

console.log("while:  \n" + result2.join(" "));
