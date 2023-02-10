"use strict"

document.querySelector(".login_button").addEventListener("click", userWantsToLogin);
document.querySelector(".register_button").addEventListener("click", userWantsToRegister);
document.querySelector(".new").addEventListener("click", changeToRegisterLayout);
document.querySelector(".have").addEventListener("click", alredyHaveAnAccount);
document.querySelector(".close_button").addEventListener("click", closeFeedbackPage);

const wrapper = document.querySelector(".wrapper");
const loadingPage = document.querySelector(".loading_bar");
const loginFeedback = document.querySelector(".login_feedback");
const userNameInput = document.querySelector("#user_name");
const passwordInput = document.querySelector("#password");
const closeButton = document.querySelector(".close_button");
const feedbackAnswer = document.querySelector("#contact_server");