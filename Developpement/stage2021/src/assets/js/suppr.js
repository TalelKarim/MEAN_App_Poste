// When the user clicks the button, open the modal 
function test() {
    var x = document.getElementById("cli").value;

    var b2 = document.getElementById("b2")

    var modal = document.getElementById("myModal");
    if (x != 0){
    modal.style.display = "block";
    }else{
    modal.style.display = "none";
    }

    // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
   
    // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  b2.onclick = function() {
    modal.style.display = "none";
  }
   
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  } 
  }
  function f(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    }
