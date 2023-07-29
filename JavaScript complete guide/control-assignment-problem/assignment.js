const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert("Random number greater than 0.7");
}

let arr = [1, 2, 3, 4, 5];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (const ar of arr) {
  console.log(ar);
}

let j = 0;
while (j < arr.length) {
  console.log(arr[j]);
  j++;
}

for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

const randomNumber2 = Math.random();

console.log(randomNumber, randomNumber2);
if (
  (randomNumber2 > 0.7 && randomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  randomNumber2 <= 0.2
) {
  alert("Greater than 0.7 or smaller than 0.2 ");
}
