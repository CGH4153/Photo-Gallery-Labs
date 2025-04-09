"use strict";

import { photosAPI } from "/js/api/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "./utils/session";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let currentPhoto = null;

async function main() {
    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;

    if (photoId !== null) {
        loadCurrentPhoto();
    }

    hideActionsColumn();
}

async function loadCurrentPhoto() {
    let pageTitle = document.getElementById("page-title");
    let urlInput = document.getElementById("input-url");
    let titleInput = document.getElementById("input-title");
    let descriptionInput = document.getElementById("input-description");
    let visibilityInput = document.getElementById("input-visibility");

    pageTitle.textContent = "Editando una foto";

    try {
        currentPhoto = await photosAPI_auto.getById(photoId);
        urlInput.value = currentPhoto.url;
        titleInput.value = currentPhoto.title;
        descriptionInput.value = currentPhoto.description;
        visibilityInput.value = currentPhoto.visibility;
    } 
    
    catch (err) {
        messageRenderer.showErrorMessage(err.response.data.message);
    }
}

async function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    if (currentPhoto === null) { // Creating a new photo
        // Add the current user ID
        formData.append("userId", sessionManager.getLoggedId());
        
        try {
            let resp = await photosAPI_auto.create(formData);
            let newId = resp.lastId;
            window.location.href = `photo_detail.html?photoId=${newId}`;
        } 
        
        catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    } 
    
    else { // Updating an existing photo
        formData.append("userId", currentPhoto.userId);
        formData.append("date", currentPhoto.date);

        try {
            await photosAPI_auto.update(formData, photoId);
            window.location.href = `photo_detail.html?photoId=${photoId}`;
        } 
        
        catch (err) {
            messageRenderer.showErrorAsAlert(err.response.data.message);
        }
    }
}

function hideActionsColumn(){
    let actions_col = document.getElementById("actions-col");

    if(!sessionManager.isLogged()){
        actions_col.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", main);