// var textAnalysis = "Hi, my name is Gillian(she/her/hers), I'm a junior Art major looking to declare a double in AGPM at UCSC.";
// console.log(textAnalysis);
// document.writeln(textAnalysis);
// textAnalysis += " I live in Cupertino and moved back to Santa Cruz for my own sanity!";
// console.log(textAnalysis);
// document.writeln("<p>" + textAnalysis + "</p>");

/**
 * Assignment: Lab 5 - Data Types & Variables
 * Author:    Alejandro and Gillian
 * Created:   01.26.2021
 *
 * Licensed: MIT 2.0
 **/

// Define variables
var make = "Ford";
var model = "Taurus";
var color = "blue";
var year = 2004;
var ownIt = true;

// Calculate
var currentYear = 2020;
var age = currentYear - year;

// Output
document.writeln("Make: " + make.fontcolor("violet") + "<br>");
document.writeln("Model: " + model.fontcolor("violet") + "<br>");
document.writeln("Color: " + color.fontcolor("violet") + "<br>");
document.writeln("Year: " + year.toString().fontcolor("violet") + "<br>");
document.writeln("Age: " + age.toString().fontcolor("violet") + " years<br>".fontcolor("violet"));
