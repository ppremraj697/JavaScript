function memoizedFactorial() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Printing from cache...");
      return cache[num];
    } else {
      console.log("Calculating result...");
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      cache[num] = result;
      return result;
    }
  };
}

const factorial = memoizedFactorial();
console.log(factorial(5));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(5));
