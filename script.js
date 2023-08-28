
// const outputElement = document.getElementById('output');

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
        document.getElementById("FirstNameError").innerHTML = "Name field can't be blank!";
    }
    else
    {
        document.getElementById("FirstNameError").innerHTML = "";
    }

    // if(FirstName.length>5)
    // {
    //     document.myform.btn.removeAttribute('disabled');
    // }

  });

    //Last name
    lastName.addEventListener('blur', function() {
    let LastName = lastName.value.trim();
    if (LastName === '') {
        document.getElementById("LastNameError").innerHTML = "Name field can't be blank!";
    }
    else
    {
        document.getElementById("LastNameError").innerHTML = "";
    }
  });

    // Age 
    age.addEventListener('blur', function() {
    let Age = age.value.trim();
    if (Age === '') {
        document.getElementById("AgeError").innerHTML = "Age field can't be blank!";
    }
    else
    {
        document.getElementById("AgeError").innerHTML = "";
    }
  });

  // Email 
    email.addEventListener('blur', function() {
    let Email = email.value.trim();
    if (Email === '') {
        document.getElementById("EmailError").innerHTML = "Email field can't be blank!";
    }
    else
    {
        document.getElementById("EmailError").innerHTML = "";
    }
  });

  //Password 
  password.addEventListener('blur', function() {
    let Password = password.value.trim();
    if (Password === '') {
        document.getElementById("PassError").innerHTML = "Password field can't be blank!";
    }
    else if(Password.length<9)
    {
        document.getElementById("PassError").innerHTML = "password length must be greater than 8";
    }
    else
    {
        document.getElementById("PassError").innerHTML = "";
    }
  });

  confPassword.addEventListener('blur', function() {
    let ConfPassword = confPassword.value.trim();
    if (ConfPassword !== password.value) {
        console.log(password+" "+confPassword);
        document.getElementById("ConfPassError").innerHTML = "Password and confirm password doesn't match";
    }
    else
    {
        document.getElementById("ConfPassError").innerHTML = "";
    }
  });
});

// function validateform(){  
//     var FirstName=document.myform.FirstName.value;  
//     var LastName=document.myform.LastName.value;  
//     var Age=document.myform.Age.value;  
//     var Password=document.myform.Password.value;  
//     var ConfPassword=document.myform.ConfPassword.value;  
//     var Email=document.myform.Email.value;  
//     console.log(FirstName);

//     if (FirstName==null || FirstName==""){  
//     // alert("First Name can't be blank");  
//     document.getElementById("FirstNameError").innerHTML = "Name field can't be blank!";
//     return false;  
//     }
//     else if (LastName==null || LastName==""){  
//     document.getElementById("LastNameError").innerHTML = "Name field can't be blank!";

//     return false;  
//     }
//     else if (Age==null || Age==""){  
//     document.getElementById("AgeError").innerHTML = "Age field can't be blank!";
//     return false;  
//     }
//     else if (Password==null || Password==""){  
//     document.getElementById("PassError").innerHTML = "Password field can't be blank!";
//     return false;  
//     }
//     else if(Password.length<8){  
//     document.getElementById("PassError").innerHTML = "Password length must be greater than 8!";
//     return false;  
//     }
//     else if (ConfPassword==null || ConfPassword==""){  
//     document.getElementById("ConfPassError").innerHTML = "Confirm Password field can't be blank!";  
//     return false;  
//     }
//     else if (Email==null || Email==""){  
//     document.getElementById("EmailError").innerHTML = "Email field can't be blank!";
//     return false;  
//     }

    
//     // else if(password.length<6){  
//     // alert("Password must be at least 6 characters long.");  
//     // return false;  
//     // }

// }  