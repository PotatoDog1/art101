function submitBio(){
  var nameVar = document.getElementById("name").value;
  console.log(nameVar);
  var emailVar = document.getElementById("email").value;
  console.log(emailVar);
  var messageVar = document.getElementById("message").value;
  console.log(messageVar);

  //change lorem ipsum to name and emailVar
  document.getElementById("nameAndEmail").innerHTML = nameVar + "<br>" + emailVar;

  //change second lorem ipsum to message
  document.getElementById("messagePrint").innerHTML = messageVar;

  var my_button = document.createElement('button');
  my_button.innerHTML = "Press me";
  document.getElementsByTagName("ul").appendChild(my_button);
}
document.getElementById("submit_bio_id").addEventListener('click', submitBio);

function colorMe(){
  document.getElementById("color_me").style.color = 'red';
}
document.getElementById("color_me").addEventListener('click', colorMe);
