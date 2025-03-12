import { parseHTML } from "/js/utils/parseHTML.js";

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
}

document.addEventListener("DOMContentLoaded", main);