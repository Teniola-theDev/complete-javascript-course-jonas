// let country = "Nigeria";
// let continent = "Africa";
// let population = 180;

// console.log(country, continent, population);

// let language;

// language = "Yoruba";
// const isIsland = false;
// console.log(isIsland, language);

// // isIsland = true;
// // console.log(isIsland);

// let countryHalf = 90;
// countryHalf++;
// console.log(countryHalf);

// let averageCountry = 33;
// console.log(population < averageCountry);

// console.log(description);

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

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// let markBMI = markMass / markHeight ** 2;
// let johnBMI = johnMass / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// //PART TWO
// markMass = 95;
// markHeight = 1.88;
// johnMass = 85;
// johnHeight = 1.76;

// markBMI = markMass / markHeight ** 2;
// johnBMI = johnMass / johnHeight ** 2;
// console.log(markBMI, johnBMI);
// markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// strings and template literals
// let description = `${country} is located in ${continent} and has a population of ${
//   population / 3
// } million.`;
// console.log(description);

// let description =
//   "Portugal is in Europe and its" +
//   " " +
//   averageCountry / 3 +
//   " " +
//   "million people speak Portuguese.";

// if/else statements
// if (population > averageCountry) {
//   console.log(`${country} is above average`);
// } else {
//   console.log(`${country} is ${averageCountry - population} below average`);
// }

//Coding challenge number 2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �

markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


*/

// if (johnBMI > markBMI) {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// } else {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's $({johnBMI})!`);
// }

// console.log();

//Equality operators
// let numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//   console.log("Only one border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 bordering country");
// } else {
//   console.log("No bordering countries");
// }

// Logical Operators
// let speaksEnglish = true;
// let lessThanFifty = true;
// let notAnIsland = false;

// let portugal = speaksEnglish && lessThanFifty && notAnIsland;
// let spain = speaksEnglish && lessThanFifty;
// let germany = speaksEnglish && notAnIsland;

// if (speaksEnglish && lessThanFifty && notAnIsland) {
//   console.log("Is the best country for you!");
// } else {
//   console.log("This is not the best country for you!");
//}

//CODING CHALLENGE
/* There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */
// let dolphinScoreOne = 96;
// let dolphinScoreTwo = 108;
// let dolphinScoreThree = 89;

// let koalaScoreOne = 88;
// let koalaScoreTwo = 91;
// let koalaScoreThree = 110;

// let dolphinAverageScore =
//   (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
// let koalaAverageScore = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

// if (dolphinAverageScore > koalaAverageScore) {
//   console.log("Dolphins win!");
// } else if (dolphinAverageScore < koalaAverageScore) {
//   console.log("Koalas win!");
// } else if (dolphinAverageScore === koalaAverageScore) {
//   console.log("Draw!");
// } else {
//   console.log("No team wins!");
// }

let dolphinScoreOne = 100;
let dolphinScoreTwo = 100;
let dolphinScoreThree = 100;

let koalaScoreOne = 100;
let koalaScoreTwo = 100;
let koalaScoreThree = 100;

let dolphinAverageScore =
  (dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree) / 3;
let koalaAverageScore = (koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3;

if (dolphinAverageScore > koalaAverageScore && dolphinAverageScore >= 100) {
  console.log("Dolphins win ooo!");
} else if (
  koalaAverageScore > dolphinAverageScore &&
  koalaAverageScore >= 100
) {
  console.log("Koalas win o!");
} else if (
  dolphinAverageScore === koalaAverageScore &&
  dolphinAverageScore >= 100 &&
  koalaAverageScore >= 100
) {
  console.log("Draw!");
} else console.log("No team wins!");
