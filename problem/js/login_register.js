"use strict"

async function userWantsToLogin() {
    document.querySelector(".loading_bar").setAttribute("id", "display_flex");
    const userName = document.querySelector("#user_name").value;
    const password = document.querySelector("#password").value;
    console.log(userName);
    console.log(password);
    const response = await loginOrRegister(userName, password);
    console.log(response);
    console.log(response.respons);
    console.log(response.user);

    if (response.respons.ok) {
        document.querySelector(".loading_bar").setAttribute("id", "display_none");
        document.querySelector(".container_login").id = "display_none";
        document.querySelector(".container_quiz").id = "display_block";
        document.querySelector(".wrapper").setAttribute("id", "quiz_back_color");
    };
    if (response.respons.status === 404) {
        document.querySelector(".login_feedback").setAttribute("id", "wrong");
        document.querySelector(".login_feedback").textContent = "Wrong user name or password";
        document.querySelector(".loading_bar").setAttribute("id", "display_none")
    };
    if (response.respons.status === 418) {
        document.querySelector(".close_button").setAttribute("id", "display_block")
        document.querySelector("#contact_server").textContent = "The server thinks it's not a teapot!"
    };

};

async function userWantsToRegister() {
    const userName = document.querySelector("#user_name").value;
    const password = document.querySelector("#password").value;

    if (response.respons.status === 404) {
        document.querySelector(".close_button").setAttribute("id", "display_block")
        document.querySelector("#contact_server").textContent = "Sorry that name is taken. Please try with another one."
    };
    if (response.respons.status === 418) {
        document.querySelector(".close_button").setAttribute("id", "display_block")
        document.querySelector("#contact_server").textContent = "The server thinks it's not a teapot!"
    };

    // const postBody = {
    //     action: "register",
    //     user_name: userName,
    //     password: password,
    // };

    // try {

    //     const post = await fetch(prefix, {
    //         method: "POST",
    //         headers: { "Content-type": "application/json; charset=UTF-8" },
    //         body: JSON.stringify(postBody),
    //     })
    //     console.log(post);
    //     const resource = await post.json();
    //     console.log(resource);
    // } catch (e) {

    //     console.log(e);

    // }
}

function changeToRegisterLayout() {
    document.querySelector(".wrapper").setAttribute("id", "register_back_color");
    document.querySelector(".have").setAttribute("id", "display_block");
    document.querySelector(".new").setAttribute("id", "display_none");
    document.querySelector(".login_button").setAttribute("id", "display_none");
    document.querySelector(".register_button").setAttribute("id", "display_block");
    document.querySelector("#feedback").textContent = "Ready when you are";
    document.querySelector("h1").textContent = "REGISTER";
};
function alredyHaveAnAccount() {
    document.querySelector(".wrapper").setAttribute("id", "login_back_color");
    document.querySelector(".have").setAttribute("id", "display_none");
    document.querySelector(".new").setAttribute("id", "display_block");
    document.querySelector(".login_button").setAttribute("id", "display_block");
    document.querySelector(".register_button").setAttribute("id", "display_none");
    document.querySelector("#feedback").textContent = "Let the magic start!";
    document.querySelector("h1").textContent = "LOGIN";

};

function closeFeedbackPage() {
    loadingPage.setAttribute("id", "display_none");
}