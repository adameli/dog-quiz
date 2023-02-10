"use strict"

document.querySelector(".login_button").addEventListener("click", userWantsToLogin);
document.querySelector(".register_button").addEventListener("click", userWantsToRegister);
document.querySelector(".new").addEventListener("click", changeToRegisterLayout);
document.querySelector(".have").addEventListener("click", alredyHaveAnAccount);
document.querySelector(".close_button").addEventListener("click", closeFeedbackPage);

const loadingPage = document.querySelector(".loading_bar");