/**
 * Assignment: Lab 6 - Arrays and Objects
 * Author:    Alejandro and Gillian
 * Created:   01.31.2021
 *
 * Licensed: Public Domain
 **/

// Define Variables
 var myTransport = ["City Bus", " Core Bus", " Uber", " Zip Car."];

 var myMainRide = {
   make: 'Ford',
   model: 'Taurus',
   color: 'blue',
   year: 2004,
   ownIt: true,
   age: 2021-2004 };

// Output
 document.writeln("Getting around with: ".fontcolor("#ffe7e6"), myTransport, "<br>");
 document.writeln("My Main Ride: <pre>".fontcolor("#ffe7e6"),
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
