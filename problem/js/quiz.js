
let numberArray = createNumberArray(ALL_BREEDS.length);

async function startQuiz() {
    loadingForNewImage();
    dogImage.style.backgroundImage = "";

    if (numberArray.length === 6) {
        numberArray = createNumberArray(ALL_BREEDS.length);
    };

    buttonContainer.removeAttribute("id", "display_none");
    const dogsArray = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = random_number(numberArray.length);
        const randomIndex = numberArray.splice(randomNumber, 1);
        dogsArray.push(ALL_BREEDS[randomIndex]);
    };
    const randomDog = dogsArray[random_number(dogsArray.length)];

    dogButtons.forEach(button => button.addEventListener("click", controllAnswer));

    dogsArray.forEach((dog, index = 0) => {
        dogButtons[index].textContent = dog.name;
        index++;
    });

    const responseObjektQuiz = await fetchFunction(`https://dog.ceo/api/breed/${randomDog.url}/images/random`);

    loadingPage.setAttribute("id", "display_none");
    dogImage.style.backgroundImage = `url('${responseObjektQuiz.resource.message}')`;

    function controllAnswer(event) {
        document.querySelector(".final_answer").setAttribute("id", "display_flex");
        if (event.currentTarget.textContent === randomDog.name) {
            document.querySelector(".right_or_wrong").setAttribute("id", "correkt");
            document.querySelector(".right_or_wrong div").textContent = "CORRECT!";
        } else {
            document.querySelector(".right_or_wrong").setAttribute("id", "in_correkt");
            document.querySelector(".right_or_wrong div").textContent = "I'm afraid not...:-(";
        };
    };
};


function random_number(max) {
    // Returnerar en random siffra mellan 0 och max - 1
    return Math.floor(max * Math.random());
};

function createNumberArray(n) {
    let numberArray = [];
    for (let i = 0; i < n; i++) {
        numberArray.push(i);
    };
    return numberArray;
};

function logOut() {
    console.log("logout");
    wrapper.classList.remove("quiz_back_color");
    loginContainer.setAttribute("id", "display_flex");
    quizContainer.setAttribute("id", "display_none");
    localStorage.removeItem("userLogin");
};

function refreshQuiz() {
    document.querySelector(".final_answer").setAttribute("id", "display_none");
    startQuiz();
};

function loadingForNewImage() {
    loadingPageResult("display_none", "display_flex", "Getting a random image...");
    buttonContainer.setAttribute("id", "display_none");
};
