/**
 * Assignment: Lab 15 - Ajax
 * Author:    Alejandro and Gillian
 * Created:   03.03.2021
 *
 * Licensed: Public Domain
 **/

// Using the core $.ajax() method
// api endpoint= https://xkcd.com/info.0.json
$("#activate").click(doAPIStuff);

function putTextOnPage(text){
  $("#output").html(text);
}

// function doAPIStuff() {
//   console.log("doing api stuff");
// //   var url = "https://api.nasa.gov/planetary/apod?api_key=YdheUYkCQCutDdoisfF9oAjtiDymR1zZtYi18NmR";
//
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//
//   xhr.onreadystatechange = function () {
//      if (xhr.readyState === 4) {
//         console.log(xhr.status);
//         console.log(xhr.responseText);
//      }};
//
//      xhr.send();
// }


function doAPIStuff() {
  console.log("doing api stuff");
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://xkcd.com/info.0.json",
    // The data to send (will be converted to a query string)
    data: { },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    // all the action goes in here
    success: function(data) {
      // do stuff
      var textData = JSON.stringify(data);
      var str = "";
      var imageURL = data.img;
      var title = data.title;
      str += "<h2>" + title + "</h2>";
      str += "<img src='" + imageURL + "'>"
      console.log("Success!", textData);
      console.log(data);
      putTextOnPage(str);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:", textStatus, errorThrown);
      putTextOnPage(errorThrown + " Status:" + status);
    }
  })
}
