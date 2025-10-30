let usersList = [];

let register_form = () => {

    let uname = document.getElementById("uname");
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    console.log("uname", uname.value);
    console.log("email", email.value);
    console.log("pass", pass.value);


    let isValid = false;

    if (uname.value === "") {
        document.getElementById("unameError").innerText = "Enter your user name"
        isValid = false;
        // return;
    } else {
        document.getElementById("unameError").innerText = ""
        isValid = true;
    }

    if (email.value === "") {
        document.getElementById("emailError").innerText = "Enter your Email id"
        isValid = false;
        // return;
    } else {
        document.getElementById("emailError").innerText = ""
        isValid = true;
    }


    if (pass.value === "") {
        document.getElementById("passError").innerText = "Enter your password"
        isValid = false;
        // return;
    } else {
        document.getElementById("passError").innerText = ""
        isValid = true;
    }


    if (isValid) {
        let user_details = {
            user_name: uname.value,
            email_id: email.value,
            password: pass.value
        };


        usersList.push(user_details)
        // console.log(usersList)
        localStorage.setItem("userList", JSON.stringify(usersList))
        uname.value = ""
        email.value = ""
        pass.value = ""
    } else {
        console.log("object is not generate")
    }



}