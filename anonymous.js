// An anonymous function in JavaScript is a function that does not have a name. It is often used as a callback function or as an argument to another function.

const add = function (x, y) {
  return x + y;
};

console.log(add(2, 3)); // Outputs: 5

// ****************************

setTimeout(function () {
  console.log("This message is shown after 3 seconds");
}, 3000);
