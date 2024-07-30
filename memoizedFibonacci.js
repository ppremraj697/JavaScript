function memoizedFibonacci() {
  let cache = {};
  return function (num) {
    if (num in cache) {
      console.log("Printing from cache...");
      return cache[num];
    } else {
      console.log("Calculating result...");
      if (num <= 1) {
        cache[num] = num;
        return num;
      }

      let fibPrev = 0;
      let fibCurr = 1;
      let fibNext;

      for (let i = 2; i <= num; i++) {
        fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
      }

      cache[num] = fibNext;

      return fibNext;
    }
  };
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(0));
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(1));
console.log(fibonacci(6));
console.log(fibonacci(6));
