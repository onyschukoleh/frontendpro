const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const newPerson = { name: "Jane" };

person.greet.call(newPerson); // Hello, Jane!
person.greet.apply(newPerson); // Hello, Jane!

const greetJane = person.greet.bind(newPerson);
greetJane(); // Hello, Jane!
