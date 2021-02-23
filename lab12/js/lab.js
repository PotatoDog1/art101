/**
 * Assignment: Lab 12 - Conditionals
 * Author:    Alejandro and Gillian
 * Created:   02.23.2021
 *
 * Licensed: MIT
**/

function sortingHat(str) {
  //length of their name
  var length = str.length;
  //name remainder of 4
  var mod = length % 4;
  if (mod == 0) {
    document.getElementById("houseDesc").innerHTML = "The Gryffindor house emphasises the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered. Notably, Gryffindor house contributed many members to Dumbledore's Army and the Order of the Phoenix, although this may have been because the main members made it a point not to associate with other houses.";
    document.getElementById("my-img").src="img/Gryffindor_ClearBG.png";
    return "Gryffindor"
  }
  else if (mod == 1) {
    document.getElementById("houseDesc").innerHTML = "Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander.";
    document.getElementById("my-img").src="img/RavenclawCrest.png";
    return "Ravenclaw"
  }
  else if (mod == 2) {
    document.getElementById("houseDesc").innerHTML = "Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses haven’t produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw.";
    document.getElementById("my-img").src="img/Slytherin_ClearBG.png";
    return "Slytherin"
  }
  else if (mod == 3) {
    document.getElementById("houseDesc").innerHTML = "Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger,[3] and yellow and black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the House was Helga Hufflepuff.";
    document.getElementById("my-img").src="img/Hufflepuff_ClearBG.png";
    return "Hufflepuff"
  }
}

// bonus task 2
// function sortingHat(str) {
//   var housesList = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
//   //length of their name
//   var length = str.length;
//   //name remainder of 4
//   var mod = length % 4;
//   //return houseObj.houseName[mod];
//   return housesList[mod];
// }

//create an event listener attached to #button
var myButton = document.getElementById("button");
myButton.addEventListener('click', function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  document.getElementById("output").innerHTML = "<p>The Sorting Hat has sorted you into " + house + "." + "</p>";
  //bonus task 2 with house description
  // if (house == "Gryffindor") {
  //   document.getElementById("houseDesc").innerHTML = "The Gryffindor house emphasises the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered. Notably, Gryffindor house contributed many members to Dumbledore's Army and the Order of the Phoenix, although this may have been because the main members made it a point not to associate with other houses.";
  //   document.getElementById("my-img").src="img/Gryffindor_ClearBG.png";
  // }
  // else if (house == "Ravenclaw") {
  //   document.getElementById("houseDesc").innerHTML = "Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander.";
  //   document.getElementById("my-img").src="img/RavenclawCrest.png";
  // }
  // else if (house == "Slytherin") {
  //   document.getElementById("houseDesc").innerHTML = "Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses haven’t produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw.";
  //   document.getElementById("my-img").src="img/Slytherin_ClearBG.png";
  // }
  // else if (house == "Hufflepuff") {
  //   document.getElementById("houseDesc").innerHTML = "Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger,[3] and yellow and black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the House was Helga Hufflepuff.";
  //   document.getElementById("my-img").src="img/Hufflepuff_ClearBG.png";
  // }
})
