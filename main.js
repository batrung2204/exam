let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    phone = id("phonenumber"),
    password = id("password"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
   failureIcon = classes("failure-icon");

form.addEventListener("submit",(e) =>{
    e.preventDefault();
    engine(username,0,"Name cannot be blank");
    engine(email,1,"Email cannot be blank");
    engine(phonenumber,2,"Phone cannot be blank");
    engine(password,3,"Password cannot be blank");
    engine(password,4,"wrong password");
});

let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border ="2px solid red";
        failureIcon[serial].style.opacity="1";
        successIcon[serial].style.opacity="0";
    }else{
        errorMsg[serial].innerHTML ="";
        id.style.border ="2px solid green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
};
