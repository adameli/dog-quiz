

let numberArray = createNumberArray(82);

async function startQuiz() {

    if (numberArray.length === 6) {
        numberArray = createNumberArray(82);
    };

    const dogsArray = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = random_number(numberArray.length);
        const randomIndex = numberArray.splice(randomNumber, 1);
        dogsArray.push(ALL_BREEDS[randomIndex])
    };
    const randomDog = dogsArray[random_number(dogsArray.length)];
    console.log(randomDog);

    const dogButtons = document.querySelectorAll("#anwsers > button");
    dogButtons.forEach(button => button.addEventListener("click", controllAnswer));

    dogsArray.forEach((dog, index = 0) => {
        dogButtons[index].textContent = dog.name;
        index++;
    });

    const responseObjektQuiz = await fetchFunction(`https://dog.ceo/api/breed/${randomDog.url}/images/random`);

    dogImage.classList.remove("dog_logo");
    dogImage.style.backgroundImage = `url('${responseObjektQuiz.resource.message}')`

    function controllAnswer(event) {
        document.querySelector(".final_answer").setAttribute("id", "display_flex");
        if (event.currentTarget.textContent === randomDog.name) {
            document.querySelector(".right_or_wrong").setAttribute("id", "correkt");
            document.querySelector(".right_or_wrong div").textContent = "CORRECT";
        } else {
            document.querySelector(".right_or_wrong").setAttribute("id", "in_correkt");
            document.querySelector(".right_or_wrong div").textContent = "I'm afraid not...:-(";
        };
    };
};


function random_number(max) {
    // Returnerar en random siffra mellan 0 och max - 1
    return Math.floor(max * Math.random());
}

function createNumberArray(n) {
    let numberArray = [];
    for (let i = 0; i < n; i++) {
        numberArray.push(i);
    }
    return numberArray;
}

function logOut() {
    console.log("logout");
    wrapper.setAttribute("id", "login_back_color");
    loginContainer.setAttribute("id", "display_flex");
    quizContainer.setAttribute("id", "display_none");
}

function refreshQuiz() {
    console.log("hej");
    document.querySelector(".final_answer").setAttribute("id", "display_none");
    startQuiz();
}
