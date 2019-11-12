// js menu
function myFunction() {
    var x = document.getElementById("responsive_menu");
    if (x.className === "responsive_menu") {
      x.className += " responsive";
    } else {
      x.className = "responsive_menu";
    }
  }
 // js menu
//  js footer
  function footerClick(Element){
    Element.classList.toggle("active");
    var panel = Element.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  }
//  js footer
// js fullscreeen navigation
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
// js fullscreeen navigation
function Member(){
  var x=document.getElementById("list_member");
  if (x.style.display === "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}
function openCarts(){
  var x =document.getElementById("Carts");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementsByClassName("money")[0].style.background="black";
  }
  else {
    x.style.display = "none";
    document.getElementsByClassName("money")[0].style.background="orangered";
  }
}
  
// var index=1;
// show(index);
// function pluss(n){
//   show(index+=n);
// }
// function show(n){
//   var i;
//   var x=document.getElementsByClassName("myslide");
//   if (n > x.length) {index = 1}
//   if (n < 1) {index = x.length}
//   for(i=0;i<=x.length;i++){
//     x[i].style.display="none";
//   }
//   x[index-1].style.display="block";
// }
