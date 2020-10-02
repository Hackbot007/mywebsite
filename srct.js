
function f1() {
window.alert("You are being directed to another page");
}

function ValidateLoginForm() {
    var username = document.form1.name;
    var email = document.form1.email;
    if (username.value == "") {
        document.getElementById("u").innerHTML = "Enter user name";
        username.focus();
        return false;
    }
    var atposition = email.value.indexOf("@");
    var dotposition = email.value.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
        document.getElementById("e").innerHTML = "Enter enter valid email";
        email.focus();
        return false;
    } else {
        window.alert("Thanks for submitting your response");
        return true;
    }
}