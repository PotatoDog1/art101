/**
 * Assignment: Lab 16: JSON and APIs
 * Author:    Alejandro and Gillian
 * Created:   03.09.2021
 *
 * Licensed: Public Domain
 **/
$("#activate").click(doAPIStuffComic);
function putTextOnPageComic(text){
  $("#output").html(text);
}

var comicObj;
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
      // var comicObj = JSON.stringify(data);
      var comicObj = data;
      var str = "";
      var title = comicObj.title;
      var imageURL = comicObj.img;
      var imageAlt = comicObj.alt;
      str += "<h2>" + title + "</h2>";
      str += "<img src='" + imageURL + "'>"
      str += "<br>" + imageAlt;
      console.log("Success!", comicObj);
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
