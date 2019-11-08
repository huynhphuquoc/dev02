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
  x.style.display="block";
}
function openCarts(){
  document.getElementById("Carts").style.display="block";
  document.getElementsByClassName("money")[0].style.background="black";
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
