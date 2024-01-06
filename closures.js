function outerFunction() {
  const outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// *********************************************

const closureExample1 = outerFunction();
closureExample1(); // Outputs: I am from outer function

function example() {
  let y = 20;
  const z = 30;

  function inner() {
    let y = 40;
    const z = 50;
    console.log(y, z);
  }

  return inner;
}

let closureExample2 = example();
closureExample2();
