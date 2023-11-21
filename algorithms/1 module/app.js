// function sumNumbers(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

function sumNumbers(numbers) {
  const sum = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sum;
}

console.log(sumNumbers([1, 3, 10]));
