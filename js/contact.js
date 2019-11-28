var nom = document.getElementById("nom");
submit.addEventListener("click", function() {
  var nom = document.getElementById("nom");
  var mail = document.getElementById("Mail");
  var message = document.getElementById("Message");
  var nb = 0;

  if (nom.value == "") {
    nom.setAttribute("style", "border-color: red;");
    nb++;
  } else {
    nom.setAttribute("style", "border-color: green;");
  }

  if (mail.value.indexOf("@") == -1 && mail.value.indexOf(".") == -1) {
    mail.setAttribute("style", "border-color: red;");
    nb++;
  } else {
    mail.setAttribute("style", "border-color: green;");
  }

  if (message.value == "") {
    message.setAttribute("style", "border-color: red;");
    nb++;
  } else {
    message.setAttribute("style", "border-color: green;");
  }
  return false;
});
