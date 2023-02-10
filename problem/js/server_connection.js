"use strict"

const prefix = "https://teaching.maumt.se/apis/access/";

async function loginUser(userName, password) {

    try {

        const serverResponse = await fetch(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${userName}&password=${password}`);
        const userCredentials = await serverResponse.json();
        return { response: serverResponse, user: userCredentials.data };

    } catch (e) {

        console.log(e);
        loadingPage.setAttribute("id", "display_flex");
        closeButton.setAttribute("id", "display_block")
        feedbackAnswer.textContent = "NetworkError! Please try again."

    }
};

