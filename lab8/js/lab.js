/**
 * Assignment: Lab 8 - Anon Functions and Callbacks
 * Author:    Alejandro and Gillian
 * Created:   02.09.2021
 *
 * Licensed: Public Domain
 **/

//testing out a common method that uses a callback
var myVar;
function myStartFunction() {
myVar = setInterval(alertFunc, 2000);
}

function alertFunc() {
  document.getElementById("demo").innerHTML += "Hello";
}

function myStopFunction() {
  clearInterval(myVar);
}

//first test
function firstThing(test) {
  console.log(test + "This is the first thing.<br>");
}

function secondThing(test) {
  console.log(test + "This is the second thing.<br>");
}

function thirdThing(test) {
  console.log(test + "This is the third thing.<br>");
}

firstThing("TEST 1 ");
secondThing("TEST 1 ");
thirdThing("TEST 1 ");

//second test
setTimeout(function(){
  firstThing("TEST 2 ");
});

setTimeout(function(){
  secondThing("TEST 2 ");
});

setTimeout(function(){
  thirdThing("TEST 2 ");
});

//third test — 2, 3, 1
setTimeout(function() {
  firstThing("TEST 3 ");
}, 2);

setTimeout(function() {
  secondThing("TEST 3 ");
}, 0);

setTimeout(function() {
  thirdThing("TEST 3 ");
}, 1);
