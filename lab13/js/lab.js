/**
 * Assignment: Lab 13 - Loops
 * Author:    Alejandro and Gillian
 * Created:   02.25.2021
 *
 * Licensed: MIT
**/

//loop through 1 to 200

// bonus task 3
// $("#my-button").click(function(){
  // var inputMax = $("#inputMax").val();
  var oneLongString = "Start<br>";
  for (i = 1; i <= 200; i++) {
  //bonus task 1
    // if (i % 91 == 0) {
    //   oneLongString += "da da da duh duh duh da da da dA dA dA DAH<br>";
    // }
    // else if (i % 65 == 0) {
    //   oneLongString += "love u <br>";
    // }
    // else if (i % 39 == 0) {
    //   oneLongString += "Ja Jang!<br>";
    // }
    if (i % 35 == 0) {
      oneLongString += "BuzzBoom<br>";
    }
    else if (i % 21 == 0) {
      oneLongString += "FizzBoom<br>";
    }
    else if (i % 15 == 0) {
      oneLongString += "FizzBuzz<br>";
    }
  //bonus task 1
    // else if (i % 13 == 0) {
    //   oneLongString += "Ba Bang! <br>";
    // }
    else if (i % 3 == 0) {
      // console.log("Fizz!");
      oneLongString += "Fizz<br>";
    }
    else if (i % 5 == 0) {
      // console.log("Buzz!");
      oneLongString += "Buzz<br>";
    }
    else if (i % 7 == 0) {
      // console.log("Boom!");
      oneLongString += "Boom<br>";
    }
    else {
      console.log(i);
      oneLongString += i + "<br>";
    }
  }

//task 4
// $("#clickIt").click(function(){
//   var inputMax = $("#inputMax").val();
//   var factorVal1 = $("#factorVal1").val();
//   var factorVal2 = $("#factorVal2").val();
//   var factorVal3 = $("#factorVal3").val();
//   var factorVal1Text = $("#factorVal1Text").val();
//   var factorVal2Text = $("#factorVal2Text").val();
//   var factorVal3Text = $("#factorVal3Text").val();
//   var oneLongString = "Start<br>";
//   for (i = 1; i <= inputMax; i++) {
//     if (i % factorVal1 == 0) {
//       oneLongString += factorVal1Text + "<br>";
//     }
//     else if (i % factorVal2 == 0) {
//       oneLongString += factorVal2Text + "<br>";
//     }
//     else if (i % factorVal3 == 0) {
//       oneLongString += factorVal3Text + "<br>";
//     }
//     else {
//       oneLongString += i + "<br>";
//     }
//   }


  $("#output").html(oneLongString);
// })
