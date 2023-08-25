function validateform(){  
    var FirstName=document.myform.FirstName.value;  
    var LastName=document.myform.LastName.value;  
    var Age=document.myform.Age.value;  
    var Password=document.myform.Password.value;  
    var ConfPassword=document.myform.ConfPassword.value;  
    var Email=document.myform.Email.value;  
    console.log(FirstName);

    if (FirstName==null || FirstName==""){  
    // alert("First Name can't be blank");  
    document.getElementById("FirstNameError").innerHTML = "Name field can't be blank!";
    return false;  
    }
    else if (LastName==null || LastName==""){  
    document.getElementById("LastNameError").innerHTML = "Name field can't be blank!";

    return false;  
    }
    else if (Age==null || Age==""){  
    document.getElementById("AgeError").innerHTML = "Age field can't be blank!";
    return false;  
    }
    else if (Password==null || Password==""){  
    document.getElementById("PassError").innerHTML = "Password field can't be blank!";
    return false;  
    }
    else if (ConfPassword==null || ConfPassword==""){  
    document.getElementById("ConfPassError").innerHTML = "Confirm Password field can't be blank!";  
    return false;  
    }
    else if (Email==null || Email==""){  
    document.getElementById("EmailError").innerHTML = "Email field can't be blank!";
    return false;  
    }

    // else if(password.length<6){  
    // alert("Password must be at least 6 characters long.");  
    // return false;  
    // }
    // else if(password.length<6){  
    // alert("Password must be at least 6 characters long.");  
    // return false;  
    // }

}  