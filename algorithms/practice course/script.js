// function isUnique(string) {
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i];
//     for (let j = 0; j < string.length; j++) {
//       if (char === string[j] && i !== j) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// function isUnique(string) {
//   const set = new Set();

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];

//     if (set.has(char)) {
//       return false;
//     }
//     set.add(char);
//   }

//   return true;
// }

// function isUnique(string) {
//   return new Set(string).size === string.length;
// }

// console.log(isUnique('abcdef')); // -> true
// console.log(isUnique('1234567')); // -> true
// console.log(isUnique('abcABC')); // -> true
// console.log(isUnique('abcadef')); // -> false

// ==========================================================

// function flatten(array) {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       const flat = flatten(array[i]);

//       for (let j = 0; j < flat.length; j++) {
//         result.push(flat[j]);
//       }
//     } else {
//       result.push(array[i]);
//     }
//   }

//   return result;
// }

// console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

// ==========================================================

// function removeDupes(str) {
//   const set = new Set(str);
//   const array = [...set].join('');
//   return array;
// }

// console.log(removeDupes('abcd')); // -> 'abcd'
// console.log(removeDupes('aabbccdd')); // -> 'abcd'
// console.log(removeDupes('abcddbca')); // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')); // -> 'abcd'

// ==========================================================

// function highestFrequency(array) {
//   const map = {};
//   let maxFreq = 0;
//   let maxFreqStr = array[0];

//   for (let i = 0; i < array.length; i++) {
//     const current = array[i];

//     if (map[current]) {
//       map[current]++;
//     } else {
//       map[current] = 1;
//     }

//     if (map[current] > maxFreq) {
//       maxFreq = map[current];
//       maxFreqStr = current;
//     }
//   }
//   return maxFreqStr;
// }

// console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
// console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
// console.log(highestFrequency(['abc', 'def'])); // -> abc
// console.log(
//   highestFrequency([
//     'abc',
//     'abc',
//     'def',
//     'def',
//     'def',
//     'ghi',
//     'ghi',
//     'ghi',
//     'ghi',
//   ])
// ); // -> ghi

// ==========================================================

// function isStringRotated(source, test) {
//   // if (source.length !== test.length) {
//   //   return false;
//   // }

//   // for (let i = 0; i < source.length; i++) {
//   //   const rotate = source.slice(i, source.length) + source.slice(0, i);

//   //   if (rotate === test) {
//   //     return true;
//   //   }
//   // }
//   // return false;
// }

//   function isStringRotated(source, test) {
//   return (source + source).includes(test) && source.length === test.length;
// }

// console.log(isStringRotated('javascript', 'scriptjava')); // -> true
// console.log(isStringRotated('javascript', 'iptjavascr')); // -> true
// console.log(isStringRotated('javascript', 'java')); // -> false

// ==========================================================

// function arraySubset(source, subset) {
//   if (subset.length > source.length) {
//     return false;
//   }

//   for (let i = 0; i < subset.length; i++) {
//     const index = source.indexOf(subset[i]);
//     if (index === -1) {
//       return false;
//     }
//     delete source[index];
//   }
//   return true;
// }

// console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
// console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
// console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
// console.log(arraySubset([1, 2], [1, 2, 3])); // -> false

// ==========================================================

// function allAnagrams(array) {
//   const sortedArr = array.map((str) => str.split('').sort().join(''));
//   for (let i = 1; i < sortedArr.length; i++) {
//     if (sortedArr[i] !== sortedArr[0]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allAnagrams(['abcd', 'bdac', 'cabd'])); // true
// console.log(allAnagrams(['abcd', 'bdXc', 'cabd'])); // false

// ==========================================================

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function rotate(source) {
//   const rotated = source[0].map((_) => []);

//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < source[i].length; j++) {
//       rotated[j][source.length - 1 - i] = source[i][j];
//     }
//   }
//   return rotated;
// }

// function rotate180(source) {
//   return rotate(rotate(source));
// }

// function rotate270(source) {
//   return rotate(rotate180(source));
// }

// function print(array) {
//   array.forEach((i) => console.log(i));
// }
// print(rotate(matrix));
// print(rotate180(matrix));
// print(rotate270(matrix));

// ==========================================================

// function search(array, target) {
//   return array.indexOf(target);
// }

// Time Complexity: O(n)
// function search(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// Time Complexity: O(log n)
// function search(array, target) {
//   let start = 0;
//   let end = array.length - 1;

//   if (target < array[start] || target > array[end]) {
//     return -1;
//   }

//   while (true) {
//     if (target === array[start]) {
//       return start;
//     }

//     if (target === array[end]) {
//       return end;
//     }

//     if (end - start <= 1) {
//       return -1;
//     }

//     const middle = Math.floor((start + end) / 2);

//     if (target > array[middle]) {
//       start = middle + 1;
//     } else if (target < array[middle]) {
//       end = middle - 1;
//     } else {
//       return middle;
//     }
//   }
// }

// console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)); // -> -1

// ==========================================================

function isBalanced(string) {
  const start = '{[(';
  const end = '}])';

  const map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };

  const queue = [];

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (start.includes(char)) {
      queue.push(char);
    } else if (end.includes(char)) {
      const last = queue.pop();
      if (map[char] !== last) {
        return false;
      }
    }
  }
  return !queue.length;
}

console.log(isBalanced('(x + y) - (4)')); // -> true
console.log(isBalanced('(((10 ) ()) ((?)(:)))')); // -> true
console.log(isBalanced('[{()}]')); // -> true
console.log(isBalanced('(50)(')); // -> false
console.log(isBalanced('[{]}')); // -> false
