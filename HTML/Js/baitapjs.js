
function myFunction() {
    var x = document.forms["form"];
    var status=false;
    var i,text;
    text=[];
    var name =x[0].value;
    var checkname=/[^A-Za-z]+/;
    var age=x[1].value;
    var checkage=/^[0-9]*$/;
    var phone=x[2].value;
    var checkphone=/^\d{10}$/;
    var email=x[3].value;
    var checkmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(checkname.test(name)){
        status=true;
    }
    else{
        status=false;
    }
    if(checkage.test(age)){
        status=true;
    }
    else{
        return false;
    }
    if(checkmail.test(email)){
        status=true;
    }
    else{
        status=false;
    }
    if(checkphone.test(phone)){
        status=true;
    }
    else{ 
        status=false;

    }
    if(status==true){
        document.getElementsByClassName("table")[0].style.display="block";
        text[0]=name;
        document.getElementsByClassName("name")[0].innerHTML=text[0];
        text[1]=age;
        document.getElementsByClassName("age")[0].innerHTML=text[1];
        text[2]=phone;
        document.getElementsByClassName("Phone")[0].innerHTML=text[2];
        text[3]=email;
        document.getElementsByClassName("Email")[0].innerHTML=text[3];
        document.getElementById("demo1").innerHTML=""; 
        document.getElementById("demo2").innerHTML="";
        document.getElementById("demo3").innerHTML="";
        document.getElementById("demo4").innerHTML="";
        return false; 
    }
    else{
        document.getElementById("demo1").innerHTML="!!!!!"; 
        document.getElementById("demo2").innerHTML="!!!!!"; 
        document.getElementById("demo3").innerHTML="!!!!!"; 
        document.getElementById("demo4").innerHTML="!!!!!"; 
        return false;
    }
}
