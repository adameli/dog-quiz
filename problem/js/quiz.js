
console.log(ALL_BREEDS.length);
console.log(ALL_BREEDS);
const numberArray = createNumberArray(82);
console.log(numberArray);
startQuiz("adamski")

async function startQuiz(user_name) {
    const dogsArray = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = random_number(numberArray.length);
        const randomIndex = numberArray.splice(randomNumber, 1);
        dogsArray.push(ALL_BREEDS[randomIndex])
    }
    console.log(dogsArray);
    console.log(numberArray);
    const randomDog = dogsArray[random_number(dogsArray.length)];
    console.log(randomDog);

    const dogButtons = document.querySelectorAll("#anwsers > button");
    dogButtons.forEach(button => button.addEventListener("click", controllAnswer));
    console.log(dogButtons);

    dogsArray.forEach((dog, index = 0) => {
        dogButtons[index].textContent = dog.name;
        index++;
    });

    const responseObjektQuiz = await fetchFunction(`https://dog.ceo/api/breed/${randomDog.url}/images/random`);
    console.log(responseObjektQuiz);
    console.log(responseObjektQuiz.resource.message);

    dogImage.classList.remove("dog_logo");
    dogImage.style.backgroundImage = `url('${responseObjektQuiz.resource.message}')`

    function controllAnswer(event) {
        console.log(event);
    }
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
