/*

let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");

let firstName = "Bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// comment



let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);

console.log(typeof javaScriptIsFun);

console.log(typeof 23);

console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof null);
*/
/*
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
const firstName = "Jonas ";
const lastName = "Schmedtmann";
console.log(firstName + lastName);

// Assignmen operators
let x = 10 + 5; // 15
x += 10; // x + 10
x *= 4; // x * 4 = 100
x++; // x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageJonas, averageAge);
*/
/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;

let markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI);


const firstName = "Jonas";
const job = "teacher";
const birthYear = "1991";
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}! `;
console.log(jonasNew);

console.log(`String
multiple
lines`);
*/
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBmi = markMass / markHeight ** 2;
let johnBmi = johnMass / johnHeight ** 2;

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${joh nBmi}) is higher than Mark's (${markBmi})!)`);
}
*/
/*
//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));

console.log(String(23));

//type coercion
console.log("I'm " + 23 + " years old");
console.log("23" + "10" + 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);
*/

/*

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 10;
if (money) {
  console.log("Dont spend it all ");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*
const age = "18";
if (age === 18) console.log("You are an adult");

if (age == 18) console.log("You are an adult");

const favorite = Number(prompt("Whats your favorite number?"));
console.log(favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favorite !== 23) console.log("why not 23?");
*/
/*
const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/
/*
const dolphineScore = (16 + 108 + 89) / 3;
const koalaScore = (18 + 91 + 110) / 3;
console.log(dolphineScore, koalaScore);

if (dolphineScore > koalaScore && dolphineScore >= 100) {
  console.log("Dolphins win!");
} else if (dolphineScore === koalaScore && dolphineScore >= 100) {
  console.log("Draw!");
} else if (koalaScore > dolphineScore && koalaScore >= 100) {
  console.log("Koalas win!");
} else {
  console.log("No one win");
}
*/

/*
const day = "sunday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday") {
  console.log("Write code examples");
} else if (day === "thurday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday") {
  console.log("Enjoy the weekend");
} else if (day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
*/
/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`);
*/
/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine")
  : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(`I like to drink ${drink}`);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);
