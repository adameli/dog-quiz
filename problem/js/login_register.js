"use strict"

async function userWantsToLogin() {

    const userName = document.querySelector("#user_name").value;
    const password = document.querySelector("#password").value;
    console.log(userName);
    console.log(password);
    const response = await loginOrRegister(userName, password)
    console.log(response);
    console.log(response.respons);
    console.log(response.user);

    if (response.respons.ok) {
        console.log("hej");
        document.querySelector(".container_login").id = "display_none";
        document.querySelector(".container_quiz").id = "display_block";
        document.querySelector(".wrapper").setAttribute("id", "quiz_back_color");

    }
}