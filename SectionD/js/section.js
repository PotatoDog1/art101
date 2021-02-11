// console.log("javascript console loaded");
// var nameVar = "Gillian";
// var numVar = 7;
// console.log("numVar");
// numVar = 25;
// console.log(numVar);
//
// function myFirstFunction() {
//   console.log("this is my first function!!!");
// }
//
// myFirstFunction();
//
// function comparingNumbers(firstNum, secondNum) {
//   console.log("First Number: " + firstNum + " Second Number: " + secondNum);
//   console.log("First number is greater than second number. This is " + (firstNum > secondNum) + ".");
// }
//
// console.log(comparingNumbers(2, 1));
// console.log(comparingNumbers(12, 18));
// function userinfo(firstname, lastname){
//   console.log("My first name is " + firstname + " and my last name is " + lastname + ".");
// }
//
// userinfo("Toni", "Rouhana");

var div_1 = document.createElement("div_1");
div_1.id = "div_1";
div_1.innerHTML = "This is annoying";
document.body.appendChild(div_1);
console.log(div_1.innerHTML);

function main() {
  outputEl = document.getElementById("div_1");
  outputEl.innerHTML = "This is more annoying than I thought!";
}
