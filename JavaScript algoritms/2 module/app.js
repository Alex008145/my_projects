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

const minNumber = function (numbers) {
  let min = numbers[0]; // 1
  for (const num of numbers) {
    // 1
    if (num < min) {
      // n
      min = num;
    }
  }
  return min; // 1
};

// const minNumber = function (numbers) {
//   return Math.min(...numbers);
// };

console.log(minNumber([5, 2, 67, 2, -9, 1, -2]));

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(5));

// function isPowerOfTwo(number) {
//   if (number < 1) {
//     return false;
//   }
//   let dividedNumber = number;
//   while (dividedNumber !== 1) {
//     console.log('Executing...');
//     if (dividedNumber % 2 !== 0) {
//       return false;
//     }
//     dividedNumber = dividedNumber / 2;
//   }
//   return true;
// }

// function isPowerOfTwo(number) {
//   if (number < 1) {
//     return false;
//   }
//   return number & (number - 1) === 0;
// // }

// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(16));
// console.log(isPowerOfTwo(13));

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
