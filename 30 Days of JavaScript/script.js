// Day 2 exercise
/*
const challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3, 5));
console.log(challenge.substr(3, challenge.length - 1));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
const str = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(str.split(","));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt("J"));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);
console.log(challenge.trim());
console.log(challenge.startsWith(30));
console.log(challenge.endsWith("Script"));
console.log(challenge.match("a"));
console.log("30 Days Of ".concat("JavaScript"));
console.log(challenge.repeat(2));

///////////////////////////////////////////////////
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "'Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.'"
);
console.log(typeof 10 == typeof +"10");
console.log(Math.round(parseFloat("9.8")) == 10);
console.log("python".includes("on") && "jargon".includes("on"));
console.log(Math.floor(Math.random() * 101));
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
console.log(Math.floor(Math.random() * 256));
console.log(Math.floor(Math.random() * "JavaScript".length));
console.log(
  "You cannot end a sentence with because because because is a conjunction".slice(
    31,
    54
  )
);
/////////////////////
const sentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const words = sentence.split(" ");
const loveCount = words.filter((word) => word.toLowerCase() === "love").length;
console.log(loveCount);

const sentence2 =
  "You cannot end a sentence with because because because is a conjunction";
const match = sentence2.match(/because/gi);
const count = match ? match.length : 0;
console.log(count);

const sentence3 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
    .replaceAll("%", "")
    .replaceAll("@", "")
    .replaceAll("&", "")
    .replaceAll("$", "")
    .replaceAll("#", "");
console.log(sentence3);

const text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
const numbers = text.match(/\d+/g);
const salary = parseInt(numbers[0]) * 12;
const bonus = parseInt(numbers[1]);
const onlineCourses = parseInt(numbers[2]) * 12;
const totalIncome = salary + bonus + onlineCourses;
console.log(totalIncome);
*/

// Day 3
const firstName = "John";
const lastName = "Sato";
const country = "Russia";
const city = "Moscow";
const age = 25;
const isMarried = false;
const year = 2023;
console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

console.log(typeof "10" === typeof 10);

console.log(parseInt(9.8) === 10);

console.log(10 == "10", null === null, "abc" === "abc");
console.log(10 === "10", NaN === NaN, "" === " ");

let python = "python";
let jargon = "jargon";
console.log(python.length > jargon.length);

///////////////////////////////
// const base = prompt("Enter the base of the triangle:");
// const height = prompt("Enter the height of the triangle:");
// const area = 0.5 * base * height;
// console.log(`The area of the triangle is: ${area}`);

// const a = +prompt("Enter side a:");
// const b = +prompt("Enter side b:");
// const c = +prompt("Enter side c:");
// const perimeter = a + b + c;
// console.log(`The perimeter of the triangle is ${perimeter}`);

// const yourName = prompt("Enter your name:");
// let isLong = yourName.length > 7 ? "Your name is long" : "Your name is short";
// console.log(isLong);

let longOrShort = firstName.length > lastName.length ? "longer" : "shorter";
console.log(
  `Your first name, ${firstName} is ${longOrShort} than your family name, ${lastName}.`
);

// let myAge = 250;
// let yourAge = 25;
// const difference = myAge - yourAge;
// console.log(`I am ${difference} years older than you`);

const date = new Date();
const birthYear = prompt("Enter birth year:");
const yourAge = date.getFullYear() - birthYear;
const canDrive =
  yourAge > 18
    ? "You can drive"
    : ` You will be allowed to drive in ${18 - yourAge} years`;
console.log(`You are ${yourAge}. ${canDrive}`);

const years = prompt("Enter the number of years a person can live:");
const secondsInYear = 31536000; // number of seconds in one year
const totalSeconds = years * secondsInYear;
console.log(
  `The total number of seconds a person can live is: ${totalSeconds}`
);

///////////////////////////////
const date2 = new Date();
const yearNow = date2.getFullYear();
const month = ("0" + (date2.getMonth() + 1)).slice(-2);
const day = ("0" + date2.getDate()).slice(-2);
const hour = ("0" + date2.getHours()).slice(-2);
const minute = ("0" + date2.getMinutes()).slice(-2);
const humanReadableTime = `${yearNow}-${month}-${day} ${hour}:${minute}`;
console.log(humanReadableTime);
