// Time Complexity: 0(n)

// Space Complexity: 0(1)

function findElement(arr, element, comparatorFn) {
  let index = 0;
  for (const item of arr) {
    if (
      typeof element === 'object' &&
      element !== null &&
      comparatorFn(element, item)
    ) {
      return index;
    }
    if (item == element) {
      return index;
    }
    index++;
  }
}

const arr = [5, 3, 10, -10, 33, 51];

console.log(findElement(arr, 10));
console.log(findElement(arr, 33));
