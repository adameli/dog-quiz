"use strict"

async function userWantsToLogin() {

    //closeButton    //loadingPage    //feedbackanswer
    loadingPageResult("display_none", "display_flex", "Contacting server...");
    const responseObjekt = await fetchFunction(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${userNameInput.value}&password=${passwordInput.value}`);

    switch (responseObjekt.response.status) {
        case 200:
            let userData = {
                userName: userNameInput.value,
                password: passwordInput.value,
            };
            let convertedUserData = JSON.stringify(userData);
            localStorage.setItem("userLogin", convertedUserData);

            loadingPage.setAttribute("id", "display_none");
            loginContainer.setAttribute("id", "display_none");
            quizContainer.setAttribute("id", "display_flex");
            wrapper.classList.add("quiz_back_color");
            document.querySelector("#user_name_in_quiz").textContent = responseObjekt.resource.data.user_name;
            startQuiz();
            break;
        case 404:
            loginFeedback.setAttribute("id", "wrong");
            loginFeedback.textContent = "Wrong user name or password";
            loadingPage.setAttribute("id", "display_none");
            break;
        case 418:
            closeButton.setAttribute("id", "display_block");
            feedbackAnswer.textContent = "The server thinks it's not a teapot!";
            break;
    };
};

async function userWantsToRegister() {

    loadingPageResult("display_none", "display_flex", "Contacting server...");

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

        closeButton.setAttribute("id", "display_block");
        switch (post.status) {
            case 200:
                console.log("new user have been added");
                feedbackAnswer.textContent = "Register Complete.  Please proceed to login.";
                break;
            case 409:
                feedbackAnswer.textContent = "Sorry that name is taken. Please try with another one.";
                break;
            case 418:
                feedbackAnswer.textContent = "The server thinks it's not a teapot!";
                break;
        };

    } catch (e) {

        loadingPageResult("display_block", "display_flex", "NetworkError! Please try again.");

    };
};

function changeToRegisterLayout() {
    changeLayout("block", "none", "Ready when you are...", "REGISTER");
};

function changeToLoginLayout() {
    changeLayout("none", "block", "Let the magic start!", "LOGIN");
};

function changeLayout(blockOrNone, noneOrBlock, string, buttonString) {

    wrapper.classList.toggle("register_back_color");
    document.querySelector(".have").setAttribute("id", "display_" + blockOrNone);
    document.querySelector(".new").setAttribute("id", "display_" + noneOrBlock);
    document.querySelector(".login_button").setAttribute("id", "display_" + noneOrBlock);
    document.querySelector(".register_button").setAttribute("id", "display_" + blockOrNone);
    document.querySelector("h1").textContent = buttonString;
    loginFeedback.setAttribute("id", "feedback");
    loginFeedback.textContent = string;
    userNameInput.value = "";
    passwordInput.value = "";
}

function closeFeedbackPage() {
    loadingPageResult("display_none", "display_none", "Contacting server...");
};