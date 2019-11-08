function opentab(pagename,elementt,color){
    var i,tablink,tabcontent;
    tabcontent=document.getElementsByClassName("tabcontent");
    for ( i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }
    tablink=document.getElementsByClassName("tab");
    for ( i = 0; i < tablink.length; i++){
        tablink[i].style.backgroundColor="";
    }
    document.getElementById(pagename).style.display="block";
    elementt.style.backgroundColor=color;
}
document.getElementById("defaultOpen").click();
