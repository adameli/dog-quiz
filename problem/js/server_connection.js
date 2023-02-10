"use strict"

const prefix = "https://teaching.maumt.se/apis/access/";

async function fetchFunction(URL) {

    try {

        const serverResponse = await fetch(URL);
        const userCredentials = await serverResponse.json();
        return { response: serverResponse, user: userCredentials.data };

    } catch (e) {

        console.log(e);
        loadingPage.setAttribute("id", "display_flex");
        closeButton.setAttribute("id", "display_block")
        feedbackAnswer.textContent = "NetworkError! Please try again."

    }
};


// fetch("https://dog.ceo/api/breed/australian/shepherd/images/random")
//     .then(r => {
//         console.log(r);
//         return r.json()
//     })
//     .then(dog => console.log(dog))
