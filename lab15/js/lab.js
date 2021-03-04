/**
 * Assignment: Lab 15 - Ajax
 * Author:    Alejandro and Gillian
 * Created:   03.03.2021
 *
 * Licensed: Public Domain
 **/

// Using the core $.ajax() method
// api endpoint= https://xkcd.com/info.0.json
$("#activate").click(doAPIStuffAPOD);
$("#activate").click(doAPIStuffComic);

function putTextOnPageComic(text){
  $("#output2").html(text);
}

function putTextOnPageAPOD(text){
  $("#output").html(text);
}

// using a tutorial to do the NASA APOD
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

//
function doAPIStuffComic() {
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
      putTextOnPageComic(str);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:", textStatus, errorThrown);
      putTextOnPageComic(errorThrown + " Status:" + status);
    }
  })
}

function doAPIStuffAPOD() {
  console.log("doing api stuff");
  $.ajax({
    // The URL for the request (from the api docs)
    url: "https://api.nasa.gov/planetary/apod",
    // The data to send (will be converted to a query string)
    data: {
      api_key: "YdheUYkCQCutDdoisfF9oAjtiDymR1zZtYi18NmR",
    },
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
      var imageURL = data.url;
      var date = data.date;
      var explanation = data.explanation;
      var copyright = data.copyright;
      str += "<h2>Date: ".fontcolor("white") + date + "</h2><br>";
      str += "<img id=my-image src='" + imageURL + "'><br>";
      str += explanation;
      str += "<br>Copyright: ".fontcolor("white") + copyright;
      console.log("Success!", textData);
      console.log(data);
      putTextOnPageAPOD(str);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) {
      // do stuff
      console.log("Error:", textStatus, errorThrown);
      putTextOnPageAPOD(errorThrown + " Status:" + status);
    }
  })
}
