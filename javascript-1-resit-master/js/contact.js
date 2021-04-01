const form = document.querySelector("#contactForm");
const errorOutput = document.querySelector(".errorDisplay")

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

const submitButton = document.querySelector("#submit");


try {
    function validateForm(){
        event.preventDefault();
    
        // First Name
        if (firstName.value.length > 0) {
            firstNameError.style.display = "none";
        } else {
            firstNameError.style.display = "block";
        }
    
        // Last Name
        if(checkLength(lastName.value, 3) === true) {
            lastNameError.style.display = "none";
        }
        else {
            lastNameError.style.display = "block";
        }
    
        // Email
        if (validateEmail(email.value) === true) {
            emailError.style.display = "none";
        }
        else {
            emailError.style.display = "block";
        }
    
        // Subject
        if(checkLength(subject.value, 7) === true) {
            subjectError.style.display = "none";
        }
        else {
            subjectError.style.display = "block";
        }
    
        // Message
        if(checkLength(message.value, 15) === true) {
            messageError.style.display = "none";
        }
        else {
            messageError.style.display = "block";
        }
        
    }
} catch(error) {
    console.log("An Error occured"+error)
    errorOutput.innerHTML += displayError ("An error occured");
} finally {
    console.log("Function was excecuted")
    // errorOutput.innerHTML = "Function was excecuted";
}


form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
}

message.onkeyup = function() {
    const len = message.value.length;
    console.log(len);

    if (len >= 17) {
        submitButton.disabled = false; 
    } else {
        submitButton.disabled = true; 
    }
}