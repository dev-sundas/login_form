function checkInput(Username, Password) {


    if (Username == "") {
        alert("Username must be filed");
        return false;
    }
    if (Password == "") {
        alert("Password must be filed");
        return false;

    }
    return true;

}

function validate() {
    let Username = document.getElementById("username").value;
    let Password = document.getElementById("password").value;
    console.log("hello world")
    console.log(Username, Password)
    const status = checkInput(Username, Password)
    if (status) {
        if (Username == "Formget" && Password == "formget#123") {
            alert("Login successfully");
            return true;
        } else {
            alert("wrong password and username");

        }
    }
}