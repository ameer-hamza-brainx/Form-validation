
let fnameFlag = false;
let lnameFlag = false;
let ageFlag = false;
let passwordFlag = false;
let confPasswordFlag = false;
let emailFlag = false;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const onlyNumbersOrSpecial = /^[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/]+$/;

document.addEventListener('DOMContentLoaded', function() {
    const firstName = document.getElementById("FirstName");
    const lastName = document.getElementById("LastName");
    const age = document.getElementById("Age");
    const password = document.getElementById("Password");
    const confPassword = document.getElementById("ConfPassword");
    const email = document.getElementById("Email");
    
    // Name field
    function isValidName(name) {
    
    return !onlyNumbersOrSpecial.test(name);
    }

    firstName.addEventListener('blur', function() {
    let fName = firstName.value.trim();
    if (fName === '') {
        document.getElementById("FirstNameError").innerHTML = "First Name field can't be blank!";
        fnameFlag = false;
    }
    else if(!isValidName(fName))
    {
        document.getElementById("FirstNameError").innerHTML = "Name can not contains only numbers or special chracters!";
    }
    else
    {
        document.getElementById("FirstNameError").innerHTML = "";
        fnameFlag = true;
    }

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
    let lName = lastName.value.trim();
    if (lName === '') {
        document.getElementById("LastNameError").innerHTML = "Last Name field can't be blank!";
        lnameFlag = false;
    }
    else if(!isValidName(lName))
    {
        document.getElementById("LastNameError").innerHTML = "Name can not contains only numbers or special chracters!";
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
    let ageValue = age.value.trim();
    if (ageValue === '') {
        document.getElementById("AgeError").innerHTML = "Age field can't be blank!";
        ageFlag = false;
    }
    else if(ageValue < 18 || ageValue >151)
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
        return emailRegex.test(email);
    }

  // Email 
    email.addEventListener('blur', function() {
    let emails = email.value.split(',');
    let EmailValid = true;
    for(var i=0;i<emails.length;i++)
    {
        if(!isValidEmail(emails[i]))
        {
            EmailValid = false;
        }
    }
    
    if (emails[0] === '' || emails ==null) {
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
    
    return /[a-z]/.test(password) && /[A-Z]/.test(password);
}
  
  password.addEventListener('blur', function() {
    let passwordValue = password.value.trim();
    if (passwordValue === '') {
        document.getElementById("PassError").innerHTML = "Password field can't be blank!";
        passwordFlag = false;
    }
    else if(passwordValue.length<9)
    {
        document.getElementById("PassError").innerHTML = "password length must be greater than 8";
        passwordFlag = false;
    }
    else if(!isValidPassword(passwordValue)){
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
    let confPasswordValue = confPassword.value.trim();
    if (confPasswordValue !== password.value) {
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

