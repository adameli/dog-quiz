"use strict"

document.querySelector(".login_button").addEventListener("click", userWantsToLogin);
document.querySelector(".register_button").addEventListener("click", userWantsToRegister);
document.querySelector(".new").addEventListener("click", changeToRegisterLayout);
document.querySelector(".have").addEventListener("click", alredyHaveAnAccount);
document.querySelector(".close_button").addEventListener("click", closeFeedbackPage);
document.querySelector(".right_or_wrong .close_button").addEventListener("click", refreshQuiz);
document.querySelector("#logout_button").addEventListener("click", logOut);

const wrapper = document.querySelector(".wrapper");
const loginContainer = document.querySelector(".container_login");
const quizContainer = document.querySelector(".container_quiz");
const loadingPage = document.querySelector(".loading_bar");
const loginFeedback = document.querySelector(".login_feedback");
const userNameInput = document.querySelector("#user_name");
const passwordInput = document.querySelector("#password");
const closeButton = document.querySelector(".close_button");
const feedbackAnswer = document.querySelector("#contact_server");
const dogImage = document.querySelector("#loading_logo");
const dogButtons = document.querySelectorAll(".answers > button");
const buttonContainer = document.querySelector(".answers");

//! TO DO CLEAN UP
//* gör en funktion till "loadingPage" som tar emot "id" och en sträng dvs vad som ska stå som feedback.
//* optimera koden när det kommer till att gå till och från inlogningen och registreringen
//* transaktionen mellan login och registrerings sidan
//* städa upp i html med classer och id
//* sticky login
