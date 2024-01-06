// Explain the different ways of creating object in javascript? Explain all the 3 ways.

// Object Literal

const person1 = {
  name: "John",
  age: 20,
  greet: function () {
    console.log(`Hi, I am ${this.name}`);
  },
};

person1.greet();

// Constructor Function

function Person2(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, this is ${this.name}`);
  };
}

const person2 = new Person2("John", 25);

console.log(person2.greet());
console.log(person2["age"]);

// Object.create

const personPrototype = {
  greet: function () {
    console.log(`Hello, ${this.name}, age is ${this.age}`);
  },
};

const person3 = Object.create(personPrototype);
person3.name = "Jay";
person3.age = 88;

person3.greet();
