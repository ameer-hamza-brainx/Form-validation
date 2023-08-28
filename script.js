
let fnameFlag = false;
let lnameFlag = false;
let ageFlag = false;
let passwordFlag = false;
let confPasswordFlag = false;
let emailFlag = false;

document.addEventListener('DOMContentLoaded', function() {
    const firstName = document.getElementById("FirstName");
    const lastName = document.getElementById("LastName");
    const age = document.getElementById("Age");
    const password = document.getElementById("Password");
    const confPassword = document.getElementById("ConfPassword");
    const email = document.getElementById("Email");

    // Name field
    firstName.addEventListener('blur', function() {
    let FirstName = firstName.value.trim();
    if (FirstName === '') {
        document.getElementById("FirstNameError").innerHTML = "First Name field can't be blank!";
        fnameFlag = false;
    }
    else
    {
        document.getElementById("FirstNameError").innerHTML = "";
        fnameFlag = true;
    }

    // if(FirstName.length>5)
    // {
    //     document.myform.btn.removeAttribute('disabled');
    // }

    if(fnameFlag && lnameFlag && ageFlag && passwordFlag && confPasswordFlag && emailFlag)
    {
        document.myform.btn.removeAttribute('disabled');
    }
    else{
        document.myform.btn.setAttribute('disabled','disabled');
    }

  });

    //Last name
    lastName.addEventListener('blur', function() {
    let LastName = lastName.value.trim();
    if (LastName === '') {
        document.getElementById("LastNameError").innerHTML = "Last Name field can't be blank!";
        lnameFlag = false;
    }
    else
    {
        document.getElementById("LastNameError").innerHTML = "";
        lnameFlag = true;
    }
    if(fnameFlag && lnameFlag && ageFlag && passwordFlag && confPasswordFlag && emailFlag)
    {
        document.myform.btn.removeAttribute('disabled');
    }
    else{
        document.myform.btn.setAttribute('disabled','disabled');
    }
  });

    // Age 
    age.addEventListener('blur', function() {
    let Age = age.value.trim();
    if (Age === '') {
        document.getElementById("AgeError").innerHTML = "Age field can't be blank!";
        ageFlag = false;
    }
    else if(Age < 18 || Age >151)
    {
        document.getElementById("AgeError").innerHTML = "Age must be between 18 and 151";
        ageFlag = false;
    }
    else
    {
        document.getElementById("AgeError").innerHTML = "";
        ageFlag = true;
    }
    if(fnameFlag && lnameFlag && ageFlag && passwordFlag && confPasswordFlag && emailFlag)
    {
        document.myform.btn.removeAttribute('disabled');
    }
    else{
        document.myform.btn.setAttribute('disabled','disabled');
    }
  });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

  // Email 
    email.addEventListener('blur', function() {
    let Emails = email.value.split(',');
    let EmailValid = true;
    for(var i=0;i<Emails.length;i++)
    {
        if(!isValidEmail(Emails[i]))
        {
            EmailValid = false;
        }
    }
    if (Emails[0] === '' || Emails ==null) {
        document.getElementById("EmailError").innerHTML = "Email field can't be blank!";
        emailFlag = false;
    }
    else if(!EmailValid)
    {
        document.getElementById("EmailError").innerHTML = "Email is not valid!";
        emailFlag = false;
    }
    else
    {
        document.getElementById("EmailError").innerHTML = "";
        emailFlag = true;
    }
    if(fnameFlag && lnameFlag && ageFlag && passwordFlag && confPasswordFlag && emailFlag)
    {
        document.myform.btn.removeAttribute('disabled');
    }
    else{
        document.myform.btn.setAttribute('disabled','disabled');
    }
  });

  
  //Password 
  function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
}
  
  password.addEventListener('blur', function() {
    let Password = password.value.trim();
    if (Password === '') {
        document.getElementById("PassError").innerHTML = "Password field can't be blank!";
        passwordFlag = false;
    }
    else if(Password.length<9)
    {
        document.getElementById("PassError").innerHTML = "password length must be greater than 8";
        passwordFlag = false;
    }
    else if(!isValidPassword(Password)){
        document.getElementById("PassError").innerHTML = "password must be alphanumeric and must contain at least one upper case and one the lower case";
        passwordFlag = false;
    }
    else
    {
        document.getElementById("PassError").innerHTML = "";
        passwordFlag = true;
    }
    if(fnameFlag && lnameFlag && ageFlag && passwordFlag && confPasswordFlag && emailFlag)
    {
        document.myform.btn.removeAttribute('disabled');
    }
    else{
        document.myform.btn.setAttribute('disabled','disabled');
    }
  });

  confPassword.addEventListener('blur', function() {
    let ConfPassword = confPassword.value.trim();
    if (ConfPassword !== password.value) {
        console.log(password+" "+confPassword);
        document.getElementById("ConfPassError").innerHTML = "Password and confirm password doesn't match";
        confPasswordFlag = false;
    }
    else
    {
        document.getElementById("ConfPassError").innerHTML = "";
        confPasswordFlag = true;
    }
    if(fnameFlag && lnameFlag && ageFlag && passwordFlag && confPasswordFlag && emailFlag)
    {
        document.myform.btn.removeAttribute('disabled');
    }
    else{
        document.myform.btn.setAttribute('disabled','disabled');
    }
  });
});

