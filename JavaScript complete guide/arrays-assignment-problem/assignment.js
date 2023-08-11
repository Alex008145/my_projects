const numbers = [1, -22, 100, 4, 5, 6];

const numsGreaterThan5 = numbers.filter((number) => number > 5);
console.log(numsGreaterThan5);

const mappedNumbers = numbers.map((number) => ({ num: number }));
console.log(mappedNumbers);

const reducedNumbers = numbers.reduce((curResult, curNumber) => {
  return curResult * curNumber;
}, 1);
console.log(reducedNumbers);

const findMax = (...numbers) => {
  let curMax = numbers[0];
  for (const num of numbers) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
};

console.log(findMax(...numbers));

const findMinMax = (...numbers) => {
  let curMax = numbers[0];
  let curMin = numbers[0];
  for (const num of numbers) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
};

const [min, max] = findMinMax(...numbers);
console.log(min, max);

const list = new Set();

list.add("Alex");
list.add(-5);
list.add(10);
list.add(-5);

console.log(list);
