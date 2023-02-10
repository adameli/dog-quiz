"use strict"

const prefix = "https://teaching.maumt.se/apis/access/";
// loginOrRegister();
async function loginOrRegister(userName, password) {

    try {

        const response = await fetch(`https://teaching.maumt.se/apis/access/?action=check_credentials&user_name=${userName}&password=${password}`)
        console.log(response);
        const resource = await response.json();
        console.log(resource);
        return { respons: response, user: resource.data };
    } catch (e) {

        console.log(e);

    }
};

