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

function highestFrequency(array) {
  const map = {};
  let maxFreq = 0;
  let maxFreqStr = array[0];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }

    if (map[current] > maxFreq) {
      maxFreq = map[current];
      maxFreqStr = current;
    }
  }
  return maxFreqStr;
}

console.log(highestFrequency(['a', 'b', 'c', 'c', 'd', 'e'])); // -> c
console.log(highestFrequency(['abc', 'def', 'abc', 'def', 'abc'])); // -> abc
console.log(highestFrequency(['abc', 'def'])); // -> abc
console.log(
  highestFrequency([
    'abc',
    'abc',
    'def',
    'def',
    'def',
    'ghi',
    'ghi',
    'ghi',
    'ghi',
  ])
); // -> ghi
