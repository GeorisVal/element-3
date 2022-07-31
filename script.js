function checkFields()
{
    let firstName = document.forms["form1"]["firstname"].value;
    let lastName = document.forms["form1"]["lastname"].value;
    let email = document.forms["form1"]["email"].value;
    let password = document.forms["form1"]["password"].value;
    let spaces = /\s/;
    let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName === "" || firstName.match(spaces)) {
        /* alert('Please enter your first name !'); */
        document.getElementById("form--firstname").style = "border: 2px solid rgb(255, 122, 122)";
        document.getElementById("form--firstname-empty").style = "visibility: visible";
    }
    if (lastName === "" || lastName.match(spaces)) {
        /* alert ('Please enter your last name !'); */
        document.getElementById("form--lastname").style = "border: 2px solid rgb(255, 122, 122)";
        document.getElementById("form--lastname-empty").style = "visibility: visible";
    }
    if (email === "" || email.match(spaces)) {
        /* alert ('Please enter your email address !'); */
        document.getElementById("form--email").style = "border: 2px solid rgb(255, 122, 122)"
        document.getElementById("form--email-error").innerHTML = "Email address cannot be empty";
        document.getElementById("form--email-error").style = "visibility: visible";
    }
    if (!email.match(validEmail) && email != "") {
        /* alert("You have entered an invalid email address !") */
        document.getElementById("form--email-error").innerHTML = "It looks like this is an invalid email address.";
        document.getElementById("form--email-error").style = "visibility: visible";
        document.getElementById("form--email").style = "border: 2px solid rgb(255, 122, 122)";
    }
    if (password === "" || password.match(spaces)) {
        /* alert ('Please enter your password !'); */
        document.getElementById("form--password").style = "border: 2px solid rgb(255, 122, 122)";
        document.getElementById("form--password-empty").style = "visibility: visible";
        return false;
    }
    {
        alert('Thank you, ' + firstName + '. You should receive an email at ' + email + '.');
        return true;
    }
}
