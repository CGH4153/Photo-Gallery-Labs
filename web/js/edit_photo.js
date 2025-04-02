"use strict";

import { photosAPI } from "/js/api/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";

let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");
let currentPhoto = null;

async function main() {
    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;

    if (photoId !== null) {
        loadCurrentPhoto();
        }
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

    // Add the current user ID

    formData.append("userId", 1);
    try {
        let resp = await photosAPI_auto.create(formData);
        let newId = resp.lastId;
        window.location.href = `photo_detail.html?photoId=${newId}`;
    } 
    
    catch (err) {
        messageRenderer.showErrorMessage(err.response.data.message);
    }
}

document.addEventListener("DOMContentLoaded", main);