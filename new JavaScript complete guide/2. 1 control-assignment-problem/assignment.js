const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("First random number is greater than 0.7");
}

const arr = [1, 3, 65, 5, 10, 25];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[arr.length - 1 - i]);
}

console.log("--------------");

for (let num of arr) {
  console.log(num);
}

console.log("--------------");

const anotherRandomNumber = Math.random();
if (randomNumber > 0.7 && anotherRandomNumber > 0.7) {
  alert("Both random numbers greater than 0.7");
} else if (randomNumber < 0.2 || anotherRandomNumber < 0.2) {
  alert("One of random numbers smaller than 0.2");
}
console.log(randomNumber, anotherRandomNumber);
