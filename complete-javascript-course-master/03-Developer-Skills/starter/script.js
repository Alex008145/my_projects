// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1965));
*/
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitude = function (temp1, temp2) {
  const temps = temp1.concat(temp2);

  let maxValue = temps[0];
  let minValue = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > maxValue) {
      maxValue = curTemp;
    }
    if (curTemp < minValue) minValue = curTemp;
  }
  console.log(maxValue, minValue);
  return maxValue - minValue;
};
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",

    // C fix
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  // B find
  console.table(measurement);
  // console.log(typeof measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A identify
console.log(measureKelvin());

const calcTempAplitudeBug = function (temp1, temp2) {
  const temps = temp1.concat(temp2);

  let maxValue = 0;
  let minValue = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > maxValue) {
      maxValue = curTemp;
    }
    if (curTemp < minValue) minValue = curTemp;
  }
  console.log(maxValue, minValue);
  return maxValue - minValue;
};
const amplitudeBug = calcTempAplitudeBug([3, 5, 1], [9, 4, 5]);
// A identify
console.log(amplitudeBug);
*/
const tempratures = [""];
const printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    tempratures.push(` ${arr[i]}C in ${i + 1} days `);
  }
  return tempratures;
};

console.log(printForecast([17, 21, 23]));
tempratures.push("");
console.log(tempratures.join("..."));
