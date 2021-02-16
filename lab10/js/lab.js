/**
 * Assignment: Lab 10 - JavaScript Events and Forms
 * Author:    Alejandro and Gillian
 * Created:   02.16.2021
 *
 * Licensed: Public Domain
 **/
// gets user input
// sortUserName - a function that takes user input and sorts the letters of their
// name
 function sortUserName(name) {

   // split string to array
   var arrayName = name.split('');
   console.log(arrayName);

   // sort the array
   var arraySort = arrayName.sort(Intl.Collator().compare);
   console.log(arraySort);

   // remove the space
   var collectSpaces = [];
   console.log("entering the while loop");
   while (arraySort[0] == " ") {
     collectSpaces.push(arraySort.shift());
     console.log(collectSpaces);
     console.log("arraySort is now " + arraySort);
   }
   console.log("final arraySort is " + arraySort);

   // add back the space to the same array
   while (collectSpaces.length > 0) {
     arraySort.push(collectSpaces.pop());
     console.log("arraySort is " + arraySort);
   }

   // shuffling the array
   var arrayShuffle = arraySort.sort( () => .5 - Math.random());
   console.log(arrayShuffle);

   // join array back to string
   var nameShuffle = arrayShuffle.join('');
   console.log(nameShuffle);

   // return rejoined name
   return nameShuffle;
 }

// Output
var button = document.getElementById('my-button');
button.addEventListener('click', function() {
  var inputValue = document.getElementById('user-name').value;
  var newName = sortUserName(inputValue);
  document.getElementById("output").innerHTML = newName;
})

var button2 = document.getElementById('my-second-button');
button2.addEventListener('click', function() {
  var inputAge = document.getElementById('age').value;
  var p = document.createElement('p');
  p.innerText = "Your age is " + inputAge + ".";
  document.getElementById('output').appendChild(p);
})
var button3 = document.getElementById('my-third-button');
button3.addEventListener('click', function() {
  var inputFavColor = document.getElementById('favcolor').value;
  var p = document.createElement('p');
  p.innerText = "Your favorite color is " + inputFavColor + ".";
  document.getElementById('output').appendChild(p);
})

  // document.getElementById("print-age").innerHTML = "Your age is " + inputAge;
