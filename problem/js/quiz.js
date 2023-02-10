
startQuiz("adamski")
async function startQuiz(user_name) {
    console.log("hej");

    const serverResponseQuiz = await fetchFunction(`https://dog.ceo/api/breed/australian/shepherd/images/random`)
};