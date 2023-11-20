const arr = [1, 56, 3, 35, 3, -2, 3.5, 6.6];

const filteredArr = arr.filter((num) => {
  return num > 5;
});
console.log(filteredArr);

const mappedArr = arr.map((val) => {
  return { num: val };
});
console.log(mappedArr);

const multiplication = arr.reduce((prevValue, curValue) => {
  return curValue * prevValue;
}, 1);
console.log(multiplication);

const findMax = (...numbers) => {
  let largest = numbers[0];
  for (let num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }
  return largest;
};

console.log(findMax(...arr));

const findMinMax = (...numbers) => {
  let smallest = numbers[0];
  let largest = numbers[0];
  for (let num of numbers) {
    if (num > largest) {
      largest = num;
    }
    if (num < smallest) {
      smallest = num;
    }
  }
  return [smallest, largest];
};
const [min, max] = findMinMax(...arr);
console.log(min, max);

const unicList = new Set();
unicList.add(10);
unicList.add(15);
unicList.add(1);
unicList.add(10);
unicList.add(3);
unicList.add(15);

console.log(unicList);
