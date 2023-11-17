const arrFib = [1, 1, 2, 3, 5, 8, 13, 21];

function fib(n) {
  const numbers = [1, 1];
  for (let i = 0; i < n - 1; i++) {
    numbers.push(numbers[i] + numbers[i + 1]);
  }
  console.log(numbers);
  return numbers[n];
}

console.log(fib(2));
console.log(fib(5));
console.log(fib(17));

// function isPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(9));
console.log(isPrime(29));
console.log(isPrime(28));
