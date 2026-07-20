let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],

  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],

    internals: [{ name: "Jack", salary: 1300 }],
  },
};
function summ(input, dep) {
  var result = 0;

  if (Array.isArray(input)) {
    result = result + input.reduce((acc, obj) => acc + obj.salary, 0);
    console.log(`сума всіх зарплат у департаменті "${dep}" : ${result}`);
  } else {
    for (const [key, value] of Object.entries(input)) {
      result = result + summ(value, key);
    }
  }
  return result;
}
console.log("сума всіх зарплат у кмпанії : " + summ(company, "компанія"));

// console.log("result=" + summa(6));
// console.log("result=" + summa(10));
// console.log("result=" + summa(7));
