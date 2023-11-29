// time complexity: O(1) | space complexity: O(1)
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(evenOrOdd(5));
console.log(evenOrOdd(6));
