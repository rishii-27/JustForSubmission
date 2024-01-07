// ********Returns Function********

function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Outputs: 10

// ********Function as argument********

function myFilter(fn, arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      results.push(arr[i]);
    }
  }
  return results;
}

var numbers = [1, 2, 3, 4, 5];
var evenNumbers = myFilter(function (x) {
  return x % 2 === 0;
}, numbers);

console.log(evenNumbers); // [2, 4]
