
var userName = document.getElementById("userName");
var userNameErr = document.getElementById("userNameErr");

var sureName = document.getElementById("sureName");
var sureNameErr = document.getElementById("sureNameErr");

var pass = document.getElementById("pass");
var passErr =document.getElementById("passErr");

var userMail = document.getElementById("userMail");
var userMailErr =document.getElementById("userMailErr");

var userPass = document.getElementById("userPass");
var userPassErr =document.getElementById("userPassErr");

var userConPass = document.getElementById("userConPass");
var userConPassErr =document.getElementById("userConPassErr");

// user name for function
function btnErr(){
    if(userName.value == ""){
        userName.style.borderColor = "#d22222";
        userName.style.borderWidth = "2px";
        userNameErr.innerHTML = "Please enter your name";
        userName.focus();
        return false;
    }

    // sure name for function
    if(sureName.value == ""){
        sureName.style.borderColor = "#d22222";
        sureName.style.borderWidth = "2px";
        sureNameErr.innerHTML = "Please enter sure name";
        sureName.focus();
        return false;
    }

    // mail for function 
    if(userMail.value == ""){
    userMail.style.borderColor = "#d22222";
    userMail.style.borderWidth = "2px";
    userMailErr.innerHTML = "Please enter your mail";
    userMail.focus();
    return false;
    }

    // pass for function
    if(userPass.value == ""){
        userPass.style.borderColor = "#d22222";
        userPass.style.borderWidth = "2px";
        userPassErr.innerHTML = "Please enter your password";
        userPass.focus();
        return false;
    }

    if(userPass.value.length <= 7){
        userPass.style.borderColor = "#d22222";
        userPassErr.innerHTML = "Password must be 8 charecters";
        userPass.focus();
        return false;
    }

    if(userConPass.value != userPass.value){
        userConPass.style.borderColor = "#d22222";
        userConPassErr.innerHTML = "Password didn't match";
        userConPass.focus();
        return false;
    }
}

// erro remove function
function btnErrRemove(){
    if(userName.value != ""){
        userName.style.borderColor = "#ddd";
        userNameErr.innerHTML = "";
    }

    if(sureName.value != ""){
        sureName.style.borderColor ="#ddd";
        sureNameErr.innerHTML = "";
    }

    if(userMail.value != ""){
        userMail.style.borderColor = "#ddd";
        userMailErr.innerHTML = "";
    }

    if(userPass.value != ""){
        userPass.style.borderColor = "#ddd";
        userPassErr.innerHTML = "";
    }
}



// fucntion call
userName.addEventListener("blur",btnErrRemove);
sureName.addEventListener("blur",btnErrRemove);
userMail.addEventListener("blur",btnErrRemove);
userPass.addEventListener("blur",btnErrRemove);


// trigger fuction 
var modal = document.getElementById("modal");
var trigger = document.getElementById("trigger");
var close =document.getElementById("close");

trigger.addEventListener("click",function(){
    modal.style.display = "flex";
})

close.addEventListener("click",function(){
    modal.style.display = "none";
})
