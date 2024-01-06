const calculator = {
  value: 10,
  add: function (x) {
    this.value += x;
    return this;
  },
  subtract: function (x) {
    this.value -= x;
    return this;
  },
  multiply: function (x) {
    this.value *= x;
    return this;
  },
  getValue: function () {
    return this.value;
  },
};

const result = calculator.add(5).multiply(2).subtract(3).getValue();
console.log(result); // 27
