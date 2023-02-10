"use strict"

async function userWantsToLogin() {

    loadingPage.setAttribute("id", "display_flex");
    const responseObjekt = await loginUser(userNameInput.value, passwordInput.value);
    console.log(responseObjekt.user);

    if (responseObjekt.response.ok) {
        loadingPage.setAttribute("id", "display_none");
        document.querySelector(".container_login").id = "display_none";
        document.querySelector(".container_quiz").id = "display_block";
        wrapper.setAttribute("id", "quiz_back_color");
    };
    if (responseObjekt.response.status === 404) {
        loginFeedback.setAttribute("id", "wrong");
        loginFeedback.textContent = "Wrong user name or password";
        loadingPage.setAttribute("id", "display_none")
    };
    if (responseObjekt.response.status === 418) {
        closeButton.setAttribute("id", "display_block")
        feedbackAnswer.textContent = "The server thinks it's not a teapot!"
    };
};

async function userWantsToRegister() {

    loadingPage.setAttribute("id", "display_flex");
    const postBody = {
        action: "register",
        user_name: userNameInput.value,
        password: passwordInput.value,
    };

    try {

        const post = await fetch(prefix, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(postBody),
        });
        console.log(post);
        if (post.status === 200) {
            const resource = await post.json();
            console.log("new user have been added", resource);
            closeButton.setAttribute("id", "display_block");
            feedbackAnswer.textContent = "Register Complete.  Please proceed to login.";
        };
        if (post.status === 409) {
            closeButton.setAttribute("id", "display_block");
            feedbackAnswer.textContent = "Sorry that name is taken. Please try with another one.";
        };
        if (post.status === 418) {
            closeButton.setAttribute("id", "display_block");
            feedbackAnswer.textContent = "The server thinks it's not a teapot!";
        };
    } catch (e) {

        console.log(e);
        loadingPage.setAttribute("id", "display_flex");
        closeButton.setAttribute("id", "display_block")
        feedbackAnswer.textContent = "NetworkError! Please try again."

    };
};

function changeToRegisterLayout() {
    wrapper.setAttribute("id", "register_back_color");
    document.querySelector(".have").setAttribute("id", "display_block");
    document.querySelector(".new").setAttribute("id", "display_none");
    document.querySelector(".login_button").setAttribute("id", "display_none");
    document.querySelector(".register_button").setAttribute("id", "display_block");
    userNameInput.value = "";
    passwordInput.value = "";
    document.querySelector("#feedback").textContent = "Ready when you are";
    document.querySelector("h1").textContent = "REGISTER";
};
function alredyHaveAnAccount() {
    wrapper.setAttribute("id", "login_back_color");
    document.querySelector(".have").setAttribute("id", "display_none");
    document.querySelector(".new").setAttribute("id", "display_block");
    document.querySelector(".login_button").setAttribute("id", "display_block");
    document.querySelector(".register_button").setAttribute("id", "display_none");
    passwordInput.value = "";
    userNameInput.value = "";
    document.querySelector("#feedback").textContent = "Let the magic start!";
    document.querySelector("h1").textContent = "LOGIN";

};

function closeFeedbackPage() {
    loadingPage.setAttribute("id", "display_none");
};