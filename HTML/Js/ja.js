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
