/**
  Author: Gillian Yu

  Copyrighted
**/
//Add buttons to challenges, problems, and results
$("#challenge").after("<button id=challenge_button>");
$("#problems").after("<button id=problems_button>");
$("#results").after("<button id=results_button>");

//give buttons a message
$("#challenge_button").html("Challenge!");
$("#problems_button").html("Problems!");
$("#results_button").html("Results!");

//change font of button text
$("button").css({"font-family": "Courier New, Monospace, sans-serif", "font-size": "150%", "color": '#4287f5'})

//click event for challenges
$("#challenge_button").click(function() {
  // $("#challenge_button").toggleClass("challengeColorChange");
  $("#problems_button").toggleClass("problemsColorChange");
  $("#results_button").toggleClass("resultsColorChange");
})

$("#problems_button").click(function() {
  // $("#problems_button").toggleClass("problemsColorChange");
  $("#challenge_button").toggleClass("resultsColorChange");
  $("#results_button").toggleClass("challengeColorChange");
})

$("#results_button").click(function() {
  // $("#results_button").toggleClass("challengeColorChange");
  $("#challenge_button").toggleClass("problemsColorChange");
  $("#problems_button").toggleClass("resultsColorChange");
})

//name prompt
// var name = prompt("What is your name?");
// var age = prompt("What is your age?");
