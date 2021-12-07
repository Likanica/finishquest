var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function my_click() {
  document.getElementById("image").src="Монитор/Монитор с текстом.png"
  var deleteimg = document.getElementById("deletee") 
  deleteimg.parentNode.removeChild(deletee);
  var deleteimg1 = document.getElementById("deleteee") 
  deleteimg1.parentNode.removeChild(deleteee);
}
