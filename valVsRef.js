// ***********Pass By value************

let a = 5;

function changeValue(val) {
  val = 10;
}

changeValue(a);
console.log(a); // Outputs: 5

// *********Pass By Referance***********

let obj = { value: 5 };

function changeObject(obj) {
  obj.value = 10;
}

changeObject(obj);
console.log(obj.value); // Outputs: 10
