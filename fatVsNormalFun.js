const person = {
  name: "John",
  normalFunction: function () {
    console.log(`Normal Function: Hello, ${this.name}!`);
  },
  arrowFunction: () => {
    console.log(`Arrow Function: Hello, ${this.name}!`);
  },
};

person.normalFunction(); // Hello, John!
person.arrowFunction(); // Hello, undefined! (this is not bound to person)
