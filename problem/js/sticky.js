
let getUserData = localStorage.getItem("userLogin");
let userDataParse = JSON.parse(getUserData);

if (userDataParse) {
    loadingPage.setAttribute("id", "display_none");
    loginContainer.setAttribute("id", "display_none");
    quizContainer.setAttribute("id", "display_flex");
    wrapper.classList.add("quiz_back_color");
    document.querySelector("#user_name_in_quiz").textContent = userDataParse.userName;
    startQuiz();
} else {
    console.log("sticky login did not work");
};



