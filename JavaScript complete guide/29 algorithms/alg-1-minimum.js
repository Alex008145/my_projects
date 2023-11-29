// Time complexity: O(n) | Space complexity: O(1)
function getMin(numbers) {
  if (numbers.length === 0) {
    throw new Error('Empty array');
  }

  let currentMin = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
  }
  return currentMin;
}

// Time complexity: O(n^2) | Space complexity: O(1)
function getMin2(numbers) {
  if (numbers.length === 0) {
    throw new Error('Empty array');
  }

  for (let i = 0; i < numbers.length; i++) {
    let outerElement = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let innerElement = numbers[j];

      if (outerElement > innerElement) {
        // swap
        numbers[i] = innerElement;
        numbers[j] = outerElement;

        outerElement = numbers[i];
        innerElement = numbers[j];
      }
    }
  }

  return numbers[0];
}

console.log(getMin2([1, 2, 3, 4, 5, -10]));

console.log(getMin([1, 2, 3, 4, 5]));

console.log(getMin([4, 2, 2, -1, 6]));

console.log(Math.min(1, 2, 3, 4, 5));
