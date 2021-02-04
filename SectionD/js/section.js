console.log("javascript console loaded");
var nameVar = "Gillian";
var numVar = 7;
console.log("numVar");
numVar = 25;
console.log(numVar);

function myFirstFunction() {
  console.log("this is my first function!!!");
}

myFirstFunction();

function comparingNumbers(firstNum, secondNum) {
  console.log("First Number: " + firstNum + " Second Number: " + secondNum);
  console.log("First number is greater than second number. This is " + (firstNum > secondNum) + ".");
}

console.log(comparingNumbers(2, 1));
console.log(comparingNumbers(12, 18));
