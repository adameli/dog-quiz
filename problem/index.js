"use strict"

document.querySelector("#login").addEventListener("click", () => {
    console.log("hej");
    document.querySelector(".wrapper").removeAttribute("id")
    document.querySelector(".wrapper").setAttribute("id", "register_back_color")
    // document.querySelector(".wrapper").classList.add("register_back_color")
})