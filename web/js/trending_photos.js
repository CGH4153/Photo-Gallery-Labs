"use strict";

import {parseHTML} from "/js/utils/parseHTML.js";

const photoRenderer = {
    asCard: function(photo) {
        let html = `<div class="col-md-4">
                <div class="card bg-dark text-light">
                    <a href="photo_detail.html?photoId=${photo.photoId}">
                        <img src="${photo.url}" class="card-img-top"/>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title text-center">${photo.title}</h5>
                        <p class="card-text">${photo.description}</p>
                        <p class="text-end">
                            @${photo.username}
                            <img src="${photo.avatarUrl}" class="photo-user-avatar"/>
                        </p>
                    </div>
                </div>
            </div>`;

        let card = parseHTML(html);
        return card;
    },

    asDetails: function (photo) {
            let html = `<div class="photo-details">
                <h3>${photo.title}</h3>
                <h6>${photo.description}</h6>
                <p>Uploaded by <a href="user_profile.html" class="user-link">User ${photo.userId}
                </a> on ${photo.date}</p>
                <hr>
                <img src="${photo.url}" class="img-fluid">
                </div>`;
            let photoDetails = parseHTML(html);
            return photoDetails;
        },
};

export { photoRenderer } from "/js/renderers/photos.js";

function photoAsCard(photo){
    let html = `<div class="col-md-4">
    <div class="card bg-dark text-light">
        <img src="${photo.url}" class="card-img-top">

        <div class="card-body">
            <h5 class="card-title text-center">${photo.title}</h5>
            <p class="card-text">Así sería la sociedad si PHP no existiera.</p>
            <p class="text-end">@user1</p>
        </div>
    </div>
    </div>`;
}

function main(){
    let container = document.querySelector("div.container");

    let cards = container.querySelectorAll("div.card");
    for(let card of cards){
        card.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    }

    let html = `<div class="col-md-4">
    <div class="card bg-dark text-light">
        <a href="photo_detail.html">
            <img src="https://pbs.twimg.com/media/Eeeb3R0VAAAiVCp.jpg" class="card-img-top">
        </a>

        <div class="card-body">
            <h5 class="card-title text-center">La sociedad del futuro</h5>
            <p class="card-text">Así sería la sociedad si PHP no existiera.</p>
            <p class="text-end">@user1</p>
        </div>
    </div>
    </div>`;

    let newCard = parseHTML(html);
    let container2 = document.getElementById("container");
    container2.appendChild(newCard);

    let container3 = document.getElementById("gallery");
    let photo = {
        title: "Samoyed",
        description: "A very good boy.",
        userId: 1,
        url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
    };
    let card = photoRenderer.asCard(photo);
    container3.appendChild(card);
}

document.addEventListener("DOMContentLoaded", main);