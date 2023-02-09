"use strict"

const prefix = "https://teaching.maumt.se/apis/access/";
loginOrRegister();
async function loginOrRegister(userName, password) {

    try {

        const response = await fetch("https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=adamski&password=dog")
        console.log(response);
        const resource = await response.json();
        console.log(resource);
    } catch (e) {

        console.log(e);

    }
}


const postBody = {
    action: "register",
    user_name: "adamski",
    password: "dog",
}
// postFunction()
async function postFunction() {

    try {

        const post = await fetch(prefix, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(postBody),
        })
        console.log(post);
        const resource = await post.json();
        console.log(resource);
    } catch (e) {

        console.log(e);

    }
}
