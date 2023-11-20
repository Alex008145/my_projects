// function findElement(arr, element, comparatorFn) {
//   let index = 0;
//   for (const item of arr) {
//     if (
//       typeof element === 'object' &&
//       element !== null &&
//       comparatorFn(element, item)
//     ) {
//       return index;
//     }
//     if (item == element) {
//       return index;
//     }
//     index++;
//   }
// }

// const arr = [5, 3, 10, -10, 33, 51];

// console.log(findElement(arr, 10));
// console.log(findElement(arr, 33));

// const objects = [
//   { name: 'Max', age: 31 },
//   { name: 'Manu', age: 32 },
// ];

// console.log(
//   findElement(objects, { name: 'Manu', age: 32 }, function (el, it) {
//     return el.name === it.name;
//   })
// );

// function findElement(sortedArr, element) {
//   let startIndex = 0;
//   let endIndex = sortedArr.length - 1;

//   while (startIndex <= endIndex) {
//     console.log('Running');
//     const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

//     if (element === sortedArr[middleIndex]) {
//       return middleIndex;
//     }
//     if (sortedArr[middleIndex] < element) {
//       startIndex = middleIndex + 1;
//     } else {
//       endIndex = middleIndex - 1;
//     }
//   }
// }

function findElement(sortedArr, element, offset) {
  console.log(sortedArr, element);
  let startIndex = 0;
  let endIndex = sortedArr.length - 1;

  const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

  if (element === sortedArr[middleIndex]) {
    return middleIndex + offset;
  }
  if (sortedArr[middleIndex] < element) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }
  return findElement(
    sortedArr.slice(startIndex, endIndex + 1),
    element,
    offset
  );
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99, 0));
// console.log(arr.findIndex((num) => num === 99));
