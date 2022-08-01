function checkFields()
{
    let firstName = document.forms["form1"]["firstname"].value;
    let lastName = document.forms["form1"]["lastname"].value;
    let email = document.forms["form1"]["email"].value;
    let password = document.forms["form1"]["password"].value;
    const spaces = /\s/;
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
    const modal = document.getElementById("modal");
    let modalText = document.getElementById("modal--text");
    if (firstName === "" || firstName.match(spaces)) {
        document.getElementById("form--firstname-empty").style = "visibility: visible";
        document.getElementById("form--firstname").
        setCustomValidity("Please enter your first name.")
    }
    if (lastName === "" || lastName.match(spaces)) {
        document.getElementById("form--lastname-empty").style = "visibility: visible";
        document.getElementById("form--lastname").
        setCustomValidity("Please enter your last name.")
    }
    if (password === "" || password.match(spaces)) {
        document.getElementById("form--password-empty").style = "visibility: visible";
        document.getElementById("form--password").
        setCustomValidity("Please enter your password.")
    }
    if (email === "" || email.match(spaces)) {
        document.getElementById("form--email-error").style = "visibility: visible";
        document.getElementById("form--email-error").innerHTML = "Email cannot be empty";
        document.getElementById("form--email").
        setCustomValidity("Please enter your email.");
        return false
    }
    if (!email.match(validEmail) && email === "") {
        document.getElementById("form--email-error").innerHTML = "It looks like this is an invalid email address.";
        document.getElementById("form--email-error").style = "visibility: visible";
        return false
    }
    {
    if(password != "" && email != "" && email && lastName != "" && firstName != "")
        modalText.innerHTML = "Thank you for registering, " + firstName + " ! You should receive an email at " + email + " shortly. You will then enjoy 7 days of Premium services free of charge !"
        modal.style.display = "Block"
        return true;
    }
}

function closeModal()
{
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function checkFirstName()
{
    let firstName = document.forms["form1"]["firstname"].value;
    let spaces = /\s/;
    if (firstName === "" || firstName.match(spaces)) {
        document.getElementById("form--firstname-empty").style = "visibility: visible";
        document.getElementById("form--firstname").
        setCustomValidity("Please enter your first name.")
        return false;
    }
    else {
        document.getElementById("form--firstname-empty").style = "visibility: collapsed";
        document.getElementById("form--firstname").
        setCustomValidity("")
        return true
    }
}

function checkLastName()
{
    let lastName = document.forms["form1"]["lastname"].value;
    let spaces = /\s/;
    if (lastName === "" || lastName.match(spaces)) {
        document.getElementById("form--lastname-empty").style = "visibility: visible";
        document.getElementById("form--lastname").
        setCustomValidity("Please enter your last name.")
        return false;
    }
    else {
        document.getElementById("form--lastname-empty").style = "visibility: collapsed";
        document.getElementById("form--lastname").
        setCustomValidity("")
        return true
    }
}

function checkEmail()
{
    let email = document.forms["form1"]["email"].value;
    let spaces = /\s/;
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
    if (email === "" || email.match(spaces)) {
        document.getElementById("form--email-error").style = "visibility: visible";
        document.getElementById("form--email-error").innerHTML = "Email cannot be empty";
        document.getElementById("form--email").
        setCustomValidity("Please enter your email.")
        return false;
    }
    if (!email.match(validEmail) && email != "") {
        document.getElementById("form--email-error").innerHTML = "It looks like this is an invalid email address.";
        document.getElementById("form--email-error").style = "visibility: visible";
        return false;
    }
    else {
        document.getElementById("form--email-error").style = "visibility: collapsed";
        document.getElementById("form--email").setCustomValidity("")
        return true
    }
}

function checkPassword()
{
    let password = document.forms["form1"]["password"].value;
    if (password === "") {
        document.getElementById("form--password-empty").style = "visibility: visible";
        document.getElementById("form--password").setCustomValidity("Please enter your password.")
        return false;
    }
    else {
        document.getElementById("form--password-empty").style = "visibility: collapsed";
        document.getElementById("form--password").setCustomValidity("")
        return true
    }
}
