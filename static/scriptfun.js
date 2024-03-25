
function addYear() {
    var d= new Date();
    var y = d.getFullYear();
    var E = document.getElementById("copyYear");
    E.innerHTML+=y;
 }

 function activeNav() {

   var x = document.getElementById("myTopnav");

   if (x.className === "topnav") {

     x.className += " responsive";

   } else {

     x.className = "topnav";

   }

 }