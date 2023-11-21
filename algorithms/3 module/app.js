function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

let counter = 0;
function fib(n, memo) {
  counter++;
  let result;
  if (memo[n]) {
    return memo[n];
  }
  // [1, 1, 2, 3, 5, 8]
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

// console.log(fib(4));
// console.log(fib(5));

const memo = {};
fib(5, memo);
console.log(counter);
console.log(memo);
counter = 0;

fib(6, {});
console.log(counter);
counter = 0;

fib(20, {});
console.log(counter);
counter = 0;

fib(50, {});
console.log(counter);
counter = 0;
