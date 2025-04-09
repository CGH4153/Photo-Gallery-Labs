"use strict";

import { sessionManager } from "./utils/session";

function showUser(){
    let title = document.getElementById("navbar-title");
    let text;

    if(sessionManager.isLogged()){
        let username = sessionManager.getLoggedUser().username;
        text = "Hi, @" + username;
    }
    else{
        text = "Guest";
    }

    title.textContent = text;
}

function addLogoutHandler(){
    let logoutButton = document.getElementById("navbar-logout");

    logoutButton.onclick = function(){
        sessionManager.logout();
        window.location.href = "index.html";
    };
}

function hideHeaderOptions(){
    let headerRegister = document.getElementById("navbar-register");
    let headerLogin = document.getElementById("navbar-login");
    let headerLogout = document.getElementById("navbar-logout");
    let headerRecent = document.getElementById("navbar-recent");
    let headerEdit = document.getElementById("navbar-edit");
    let headerTrending = document.getElementById("navbar-trending");
    
    if(sessionManager.isLogged()){
        headerRegister.style.display = "none";
        headerLogin.style.display = "none";
    }
    else{
        headerRecent.style.display = "none";
        headerEdit.style.display = "none";
        headerLogout.style.display = "none";
        headerTrending.style.display = "none";
    }
}

function main(){
    showUser();
    addLogoutHandler();
    hideHeaderOptions();
}

document.addEventListener("DOMContentLoaded", main);