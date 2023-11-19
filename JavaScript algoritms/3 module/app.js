function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

function fib(n) {
  // [1, 1, 2, 3, 5, 8]
  if (n === 0 || n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));
console.log(fib(5));
