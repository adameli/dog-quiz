
let getUserData = localStorage.getItem("userLogin");
let userDataParse = JSON.parse(getUserData);

if (userDataParse) {
    loadingPage.setAttribute("id", "display_none");
    document.querySelector(".container_login").id = "display_none";
    document.querySelector(".container_quiz").id = "display_block";
    wrapper.setAttribute("id", "quiz_back_color");
    document.querySelector("#user_name_in_quiz").textContent = userDataParse.userName;
    startQuiz();
} else {
    console.log("sticky login did not work");
};



