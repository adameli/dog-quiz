"use strict"

document.querySelector(".login_button").addEventListener("click", userWantsToLogin);
document.querySelector(".register_button").addEventListener("click", userWantsToRegister);
document.querySelector(".new").addEventListener("click", changeToRegisterLayout);
document.querySelector(".have").addEventListener("click", changeToLoginLayout);
document.querySelector(".close_button").addEventListener("click", closeFeedbackPage);
document.querySelector(".right_or_wrong .close_button").addEventListener("click", refreshQuiz);
document.querySelector("#logout_button").addEventListener("click", logOut);

const wrapper = document.querySelector(".wrapper");
const loginContainer = document.querySelector(".container_login");
const quizContainer = document.querySelector(".container_quiz");
const loadingPage = document.querySelector(".loading_bar");
const loginFeedback = document.querySelector(".login_feedback");
const feedbackAnswer = document.querySelector("#contact_server");
const userNameInput = document.querySelector("#user_name");
const passwordInput = document.querySelector("#password");
const closeButton = document.querySelector(".close_button");
const dogImage = document.querySelector("#loading_logo");
const dogButtons = document.querySelectorAll(".answers > button");
const buttonContainer = document.querySelector(".answers");

function loadingPageResult(button, display, feedback) {
    closeButton.setAttribute("id", button);
    loadingPage.setAttribute("id", display);
    feedbackAnswer.textContent = feedback;
};

//! TO DO
//* få in alla fonts
//* städa upp i html med classer och id
//* fixa så att appen är responsive jämte mot de flesta mobilerna

