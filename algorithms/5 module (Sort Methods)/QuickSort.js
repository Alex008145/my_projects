// Recursive Step Runtime: 0(n^logb(a)) => 0(n^log2(2)) => 0(n^1) => 0(n)
// Runtime outside of the recursion: 0(n)
// Algorithm runtime: 0(n^logb(a) * log n)

// Space Complexity: 0(n) (0(log n) is possible)

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
