let country = "Nigeria";
let continent = "Africa";
let population = 180;

console.log(country, continent, population);

let language;

language = "Yoruba";
const isIsland = false;
console.log(isIsland, language);

// isIsland = true;
// console.log(isIsland);

let countryHalf = 90;
countryHalf++;
console.log(countryHalf);

let averageCountry = 33;
console.log(population < averageCountry);

let description =
  "Portugal is in Europe and it's" +
  " " +
  averageCountry / 3 +
  " " +
  "million people speak Portuguese.";

console.log(description);

//CODING EXERCISE 1
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log(markHigherBMI);

//PART TWO
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
