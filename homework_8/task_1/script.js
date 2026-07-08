function closuer() {
  let sum = 0;

  return function (value) {
    sum += value;
    return sum;
  };
}

const summa = closuer();

console.log(summa(4));
console.log(summa(6));
console.log(summa(10));
console.log(summa(7));
