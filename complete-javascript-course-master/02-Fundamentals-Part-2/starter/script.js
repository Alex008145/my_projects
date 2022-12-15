"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/
/*
function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
/*
// Funcrion declaration
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);

console.log(age1, age2);
*/
/*
// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "Alex"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retired in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinsAvarage = calcAverage(85, 54, 41);
const koalasAvarage = calcAverage(23, 34, 27);

const checkWinner = function (dolphinsAvarage, koalasAvarage) {
  if (dolphinsAvarage >= koalasAvarage * 2) {
    console.log(`Dolphins win (${dolphinsAvarage} vs. ${koalasAvarage})`);
  } else if (koalasAvarage >= dolphinsAvarage * 2) {
    console.log(`Koalas win (${koalasAvarage} vs. ${dolphinsAvarage})`);
  } else {
    console.log("No winner");
  }
};

checkWinner(dolphinsAvarage, koalasAvarage);
*/
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercize
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

friends.unshift("John");
console.log(friends);

// Remove elements
const popped = friends.pop(); // Last
console.log(popped);
console.log(friends);

friends.shift(friends); // First
console.log(friends);

console.log(friends.indexOf("Steven"));

console.log(friends.includes("Bob"));
console.log(friends.includes("Steven"));

friends.push(23);
console.log(friends.includes(23));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
*/

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
// );

// const tip;
// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     const tip = bill * 0.15;
//   } else {
//     const tip = bill * 0.2;
//   }
// }
/*
const bill = 430;

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(total);
*/
/*
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.firstName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do u want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// Challenge
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));

// Challenge
//"Jonas is a 46-year old techer, and he has a driver's license."

// console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, `);
console.log(jonas.getSummary());
*/
/*
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  height: 1.69,
  mass: 78,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  height: 1.95,
  mass: 92,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(mark, john);
console.log(mark.bmi, john.bmi);

const higher = function () {
  if (mark.bmi > john.bmi) {
    console.log(
      `Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi}))!`
    );
  } else {
    console.log(
      `John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})!`
    );
  }
};

higher();
*/
/*
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

//for loop keeps running while condition is TRUE
for (let rep = 5; rep <= 10; rep++) {
  console.log(`lifting weights repetiton ${rep}`);
}
*/
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);

  types[i];
}
