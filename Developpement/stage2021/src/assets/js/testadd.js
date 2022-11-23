// When the user clicks the button, open the modal 
function testadd(){
    var x = document.getElementById("client").value;
    var y = document.getElementById("adresse").value;
    var a = document.getElementById("tel").value;
    var z = document.getElementById("fax").value;
    var m = document.getElementById("mail").value;
   
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
   
    // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
   
    // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
   
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  if (x == null || x == "" || y == null || y == ""|| z == null || z == ""|| a == null || a == ""|| m == null || m =="") {
   
    document.getElementById("img").innerHTML="<img src='assets/close.png' width='50px' heigth='50px'>";
    document.getElementById("error").innerHTML = "veuillez remplir tous les champs";
    return false
}
else{ document.getElementById("img").innerHTML="<img src='assets/checked.png' width='50px' heigth='50px'>";
  document.getElementById("error").innerHTML = "Ajout terminé avec Succès .";

  return true
}

}
////////////////////////////////////////////////////////////////////////////////////////
function testadde(){
  var x = document.getElementById("cli").value;
  var y = document.getElementById("reg").value;
  var a = document.getElementById("bp").value;
  var z = document.getElementById("service").value;
  var m = document.getElementById("mt").value;
  var n = document.getElementById("nbre").value; 
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
 
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
 
  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
 
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

if (x == null || x == "" || y == null || y == ""|| z == null || z == ""|| a == null || a == ""|| m == null || m =="" || n == null || n =="") {
 
  document.getElementById("img").innerHTML="<img src='assets/close.png' width='50px' heigth='50px'>";
  document.getElementById("error").innerHTML = "veuillez remplir tous les champs";
  return false
}
else{ document.getElementById("img").innerHTML="<img src='assets/checked.png' width='50px' heigth='50px'>";
document.getElementById("error").innerHTML = "Ajout terminé avec Succès .";

return true
}

}