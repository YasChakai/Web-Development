// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log ('ican drive ');


'use strict';

// function logger () {
// console.log ('my name is yassin');

// }


// logger ();

 
// function fruitProcessor (apples, oranges) {

//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;


// }
 
//  const appleJuice = fruitProcessor (5,0);

//  console.log(appleJuice);

//  const appleOrangeJuice = fruitProcessor (2,4);

// // console.log (appleOrangeJuice);





// // function declaration

// function calcAge1 (birthYear) {
  
//   return 2021 - birthYear; 

// }


// const age1 = calcAge1 (1998);

// console.log(age1);



// // function expression 

// const calcAge2 = function (birthYear) {
//  return 2021 - birthYear;


// }

// const age2 = calcAge2(1991);

// // console.log (age1,age2);

// // function expression 

// const calcAge2 = function (birthYear) {
//  return 2021 - birthYear;

// }

// // Arrow Function

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement =( birthYear, firstName) => {
//  const age = 2021 - birthYear;
//  const retirement = 65 - age;
//  return `${firstName} retires in ${retirement} years`;

// }

// console.log (yearsUntilRetirement (1998,'Yassin'));
// console.log (yearsUntilRetirement (1972,'Jonas'));


// function cutPieces(fruit){
// //  return fruit * 2;

// // };
 
// // function fruitProcessor (apples, oranges) {
// //  const applePieces = cutPieces (apples);
// //  const orangePieces = cutPieces (oranges);

// //   console.log(apples, oranges);
// //   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
// //   return juice;
// // }

// // console.log (fruitProcessor (2, 3));


// const calcAge = function (birthYear) {

//     return 2021 - birthYear;
// }


// const yearsUntilRetirement = function ( birthYear, firstName) 
//  {
//  const age = calcAge (birthYear);
//  const retirement = 65 - age;


// if (retirement > 0){
//  console.log (`${firstName} retires in ${retirement} years`);
//  return retirement;


// }else {
//  console.log (`${firstName} has already retired`);
//     return -1;
   
   
// }

// }


// console.log (yearsUntilRetirement(1998, 'Yassin'));
// console.log (yearsUntilRetirement(1955, 'Jonas'));


// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! 
// Your tasks: 
// 1.	Create an arrow function 'calcAverage' to calculate the average of 3 scores 
// 2.	Use the function to calculate the average for both teams 
// 3.	Create a function 'checkWinner' that takes the average score of each team as parameters 
// ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)" 
// 4.	Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2 
// 5.	Ignore draws this time 
// Test data: 
// §	Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
// §	Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 
// Hints: 
// §	To calculate average of 3 values, add them all together and divide
//  by 3  To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉 
 

