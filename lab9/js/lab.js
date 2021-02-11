/**
 * Assignment: Lab 9 - JavaScript for the Web
 * Author:    Alejandro and Gillian
 * Created:   02.11.2021
 *
 * Licensed: Public Domain
 **/

//get the output div
var outputEl = document.getElementById("output");

//create a new element and assign to new1El
var new1El = document.createElement("p");
new1El.innerHTML = "Something new"; //change HTML attribute to say something new

//create another new element and assign to var new2El
var new2El = document.createElement("p");
new2El.innerHTML = "say another thing"; //change html attribute to say something new
document.getElementById("output").appendChild(new1El);
document.getElementById("output").appendChild(new2El);
document.getElementById("output").style.color = "red";
document.getElementById("output").style.fontSize = "60px";

//Task X
// Bonus task 1: create a new element amd incert it at the top of an element
var new3El = document.createElement("p");
outputEl.insertBefore(new3El, outputEl.firstChild);
new3El.id = "para";

// Bonus task 2: setting the page's background color to pink
document.body.style.backgroundColor = "#ffa3dd";

// Bonus task 2: inserts the url of the page in the p tag with id "para"
var urlEl = document.URL;
document.querySelector("#para").innerHTML = urlEl;

// Bonus task 3: create button and append it under outputEl
var buttonEl = document.createElement("button");
buttonEl.innerText = "Press Me!";
outputEl.appendChild(buttonEl);

// Bonus task 3: switch position of new3El under new2El after clicking button
buttonEl.onclick = function() {
  new2El.insertAdjacentElement("afterend", new3El);
}
