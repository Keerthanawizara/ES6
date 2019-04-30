let selectedColors = ['red', 'blue']
console.log(selectedColors)

//arithmetic opertors
 let x = 10;
 let y = 20;
  //console.log(x**y)
  console.log(++x,--y)
//logical operators
//AND
let highIncome = true;
let highCreditScore = true;
let eligible = highIncome &&highCreditScore;
console.log(eligible);
// //OR
let highIncomes = true;
let highCreditScores = false;
let eligibles = highIncomes || highCreditScores;
console.log(eligibles);
//!not
let highIncomess = false;
let highCreditScoress = false;
let eligibless = highIncomess || highCreditScoress;
console.log(eligibless);
 let notEligible = !eligibless;
console.log(notEligible);

//falsy values not boolean
let userColor = undefined;
let defaultColor = 'blue';

let checkColor = userColor || defaultColor ;
console.log(checkColor)





