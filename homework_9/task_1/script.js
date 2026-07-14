let ladder = {
  counter: 0,
  up: function () {
    this.counter = this.counter + 1;
    return this.counter;
    // підніматиме вас на одну сходинку
  },
  down: function () {
    this.counter = this.counter - 1;
    return this.counter;
    // опускатиме вас на одну сходинку
  },
  showStep: function () {
    // показує поточну сходинку
    return this.counter;
  },
};

console.log(ladder.up()); // 1

console.log(ladder.up()); // 2

console.log(ladder.down()); // 1

console.log(ladder.showStep()); // 1

let ladder2 = {
  counter: 0,
  up: function () {
    this.counter = this.counter + 1;
    return this;
    // підніматиме вас на одну сходинку
  },
  down: function () {
    this.counter = this.counter - 1;
    return this;
    // опускатиме вас на одну сходинку
  },
  showStep: function () {
    // показує поточну сходинку
    return this.counter;
  },
};

console.log(ladder2.up().up().down().showStep()); // 1
