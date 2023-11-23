// Time Complexity: 0(n^2)

// Space Conplexity: 0(1)

function sort(arr) {
  const resultArray = [...arr];

  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];
    console.log('Outer loop');
    console.log(outerEl);

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];
      console.log('Inner loop');
      console.log('outerEl: ' + outerEl);
      console.log('innerEl: ' + innerEl);

      // [2, 1, 3] => [1, 2, 3]
      if (outerEl > innerEl) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
        console.log('INSIDE IF');
        console.log(resultArray);
      }
      console.log('End of inner loop');
      console.log(resultArray);
    }
  }

  return resultArray;
}

// const sortedArray = sort([5, 10, -3, -10, 1, 100, 99]);
const sortedArray = sort([5, 10, -3]);
console.log(sortedArray);
