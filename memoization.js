// Memoization is a technique used to speed up recursive functions by storing the results of previous calls and returning the cached result when the same input is used again. This can be a very effective way to improve the performance of functions that are called repeatedly with the same arguments.

function memoizedFibonacci(n) {
  if (n < 0) {
    throw new Error("n must be a non-negative integer");
  }

  // Memoization cache
  const cache = {};

  // If the result is already cached, return it
  if (cache[n] !== undefined) {
    return cache[n];
  }

  // Otherwise, calculate the result and cache it
  const result =
    n < 2 ? n : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  cache[n] = result;
  return result;
}

console.log(memoizedFibonacci(12));

// ************************************

function memoizedAdd() {
  const cache = {};

  return function (num) {
    if (num in cache) {
      console.log("Fetching from cache");
      return cache[num];
    } else {
      console.log("Calculating result");
      const result = num + 10;
      cache[num] = result;
      return result;
    }
  };
}

const add = memoizedAdd();

console.log(add(5)); // Outputs: Calculating result, 15
console.log(add(5)); // Outputs: Fetching from cache, 15
