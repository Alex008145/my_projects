const age = [30, 29, 5];

// [30, 29, 5] => [30, 29, 5, _]
// [0, 1, 2] => [0, 1, 2, 3]
age.push(60); // Constant time complexity: O(1)

// [30, 29, 5] => [_, 30, 29, 5]
// [0, 1, 2] => [3, 0, 1, 2]
age.unshift(10); // Linear time complexity: O(n)

const myAge = age[1]; // Constant time complexity: O(1)

//-----------------------------------------------------------------------------

const namePopularity = [
  {
    userName: 'Max',
    usages: 5,
  },
  {
    userName: 'Manuel',
    usages: 6,
  },
];

const manuUsages = namePopularity.find(
  (user) => user.userName === 'Manuel'
).usages;
// Best case: Constant time complexity O(1)
// Worst case: Linear time complexity O(n)

const nameMap = {
  max: 5,
  manu: 6,
};

const manuUsages2 = nameMap['manu']; // Constant time complexity O(1)

// const nameRealMap = new Map();
