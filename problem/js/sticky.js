console.log("hej");
// sticky()
// async function sticky() {

let getUserData = localStorage.getItem("userLogin");
console.log(getUserData);
let userDataParse = JSON.parse(getUserData);
console.log(userDataParse);

if (userDataParse) {
    console.log("true");
    loadingPage.setAttribute("id", "display_none");
    document.querySelector(".container_login").id = "display_none";
    document.querySelector(".container_quiz").id = "display_block";
    wrapper.setAttribute("id", "quiz_back_color");
    document.querySelector("#user_name_in_quiz").textContent = userDataParse.userName;
    startQuiz();
} else {
    console.log(false);
}
// };

console.log("då");


