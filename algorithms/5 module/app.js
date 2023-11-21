// function sort(arr) {
//   const resultArray = [...arr];

//   for (let outer = 0; outer < resultArray.length; outer++) {
//     let outerEl = resultArray[outer];
//     console.log('Outer loop');
//     console.log(outerEl);

//     for (let inner = outer + 1; inner < resultArray.length; inner++) {
//       let innerEl = resultArray[inner];
//       console.log('Inner loop');
//       console.log('outerEl: ' + outerEl);
//       console.log('innerEl: ' + innerEl);

//       // [2, 1, 3] => [1, 2, 3]
//       if (outerEl > innerEl) {
//         resultArray[outer] = innerEl;
//         resultArray[inner] = outerEl;

//         outerEl = resultArray[outer];
//         innerEl = resultArray[inner];
//         console.log('INSIDE IF');
//         console.log(resultArray);
//       }
//       console.log('End of inner loop');
//       console.log(resultArray);
//     }
//   }

//   return resultArray;
// }

// // const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
// const sortedArray = sort([5, 10, -3]);
// console.log(sortedArray);

function sort(arr) {
  const copiedArray = [...arr];
  console.log('FUNCTION STARTING');
  console.log(arr);

  if (copiedArray.length <= 1) {
    console.log('ONLY ONE ITEM - RETURNING');
    console.log(copiedArray);
    return copiedArray;
  }

  const smallerElementsArray = [];
  const biggerElementsArray = [];
  const pivotElement = copiedArray.shift();
  const centerElementsArray = [pivotElement];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElement) {
      centerElementsArray.push(currentElement);
    } else if (currentElement < pivotElement) {
      smallerElementsArray.push(currentElement);
    } else {
      biggerElementsArray.push(currentElement);
    }
  }

  console.log('AFTER WHILE');
  console.log(smallerElementsArray);
  console.log(centerElementsArray);
  console.log(biggerElementsArray);

  const smallerElementsSortedArray = sort(smallerElementsArray);
  const biggerElementsSortedArray = sort(biggerElementsArray);
  return smallerElementsSortedArray.concat(
    centerElementsArray,
    biggerElementsSortedArray
  );
}

const sortedArray = sort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);
