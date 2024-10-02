function validation(e){
    e.preventDefault();
    const email=document.getElementById("email").value;
    const pass=document.getElementById("password").value;
    const age=document.getElementById("age").value;
    const msgbox=document.getElementById("message");
    var message="";
    if(email===""){
        message="Please enter your Email";
        msgbox.style.color="red";
    }
    else if(pass===""){
        message="The password should be 9 character";
        msgbox.style.color="red";
    }
    else if(age===""){
        message="Enter your age between 12 to 50";
        msgbox.style.color="red";
    }
    else{
        message="Login Sucessful";
        msgbox.style.color="green";
    }
    msgbox.innerText=message;
}