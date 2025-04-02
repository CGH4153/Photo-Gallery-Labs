"use strict";

console.log("Hola, mundo!");

let edad = 25;
let alturaCm = 1.76;
let nombre = "John";
let buenEstudiante = true;

let saludo = `Mi nombre es ${nombre} y tengo ${edad} años`;
console.log(saludo);

if(buenEstudiante){
    console.log("¡Soy un buen estudiante!");
}
else{
    console.log("No soy un buen estudiante. :(");
}

let lista = ["uno", "dos", "tres"];
let objeto = {
    uno: 1,
    dos: 2,
    tres: 3
};

// Dos bucles equivalentes

for(let l of lista){
    console.log(l);
}

for(let i = 0; i < lista.length; i++){
    let l = lista[i];
    console.log(l);
}

console.log(objeto.uno); // Imprime el objeto uno

for(let l of lista){
    console.log(objeto[l]); // Imprime cada ojbeto de la lista (1, 2, 3)
}

let addTwoNumbers = (a, b) => a + b;


let resultado = addTwoNumbers(5, 3);
console.log(resultado);

function isEven(x){
    return x % 2 === 0;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = numeros.filter(isEven);
console.log(evenNumbers); // [2, 4, 6, 8]

// Otra forma

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers2 = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers2);

function main(){
    let myDiv = document.getElementById("dom-test");
    myDiv.textContent = "Esto fue añadido usando JavaScript";
    myDiv.style.backgroundColor = "#EEEEEE";
    myDiv.style.color = "black";
    myDiv.style.fontFamily = "monospace";

    let newP = document.createElement("p");
    newP.textContent = "Esto es un nuevo párrafo";
    myDiv.appendChild(newP);

    let newImage = document.createElement("img");
    newImage.src = "https://loadedlanscapes.com/wp-content/uploads/2019/07/lighting.jpg";
    newImage.title = "Un bonito paisaje";
    myDiv.appendChild(newImage);

    let container = document.querySelector("div.container");
    container.style.backgroundColor = "#BBBBBB";
    document.getElementById("id");
    document.querySelector("#id");
}

// Renderizado de la galería

import { galleryRenderer } from '/js/renderers/gallery.js';
function main() {
    let container = document.getElementById("gallery");
    let photos = [
        {
            title: "Samoyed",
            description: "A very good boy.",
            userId: 1,
            url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
            date: "15/08/2020",
        },
        {
            title: "ETSII",
            description: "E.T.S. Ing. Informatica, Universidad de Sevilla",
            userId: 2,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/ETSI_Inform%C3%A1tica_Sevilla_y_DrupalCamp_Spain_2011.jpg/1920px-ETSI_Inform%C3%A1tica_Sevilla_y_DrupalCamp_Spain_2011.jpg",
            date: "01/01/2021",
        },
        {
            title: "Seville",
            description: "The beautiful city of Seville",
            userId: 3,
            url: "https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg",
            date: "03/02/2019",
        },
        {
            title: "Abstract art",
            description: "Clipart",
            userId: 4,
            url: "https://clipartart.com/images/worst-clipart-ever-1.jpg",
            date: "14/08/2019",
        },
    ];
    let gallery = galleryRenderer.asCardGallery(photos);
    container.appendChild(gallery);
}

// Gestión de eventos

function main() {
    let button = document.getElementById("test-button");
    button.onclick = function (event) {
        alert("You've pressed the button!");
    };
}

function main() {
    let button = document.getElementById("test-button");
    button.onclick = clickHandler;
}

function clickHandler(event) {
    let target = event.target;
    let text = target.textContent;
    alert(text);
}

function main() {
    let cards = document.querySelectorAll("div.card");
    for (let card of cards) {
        card.onmouseenter = handleMouseEnter;
        card.onmouseleave = handleMouseLeave;
    }
 }

function handleMouseEnter(event) {
    let card = event.target;
    card.style.border = "2px solid blue"
}

function handleMouseLeave(event) {
    let card = event.target;
    card.style.border = "none";
}

// Renderizando las fotos del servidor

import { photosAPI_auto } from "/js/api/_photos.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";

async function main() {
    loadAllPhotos();
}

async function loadAllPhotos() {
    let galleryContainer = document.querySelector("div.container");

    try {
        let photos = await photosAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(photos);
        galleryContainer.appendChild(cardGallery);
    } 
    
    catch (err) {
        messageRenderer.showErrorMessage("Error while loading photos", err);
    }
}

// Peticiones AJAX a vistas

import { photoswithusersAPI_auto } from "/js/api/_photoswithusers.js";

async function loadAllPhotos() {
    let galleryContainer = document.querySelector("div.container");
    try {
        let photos = await photoswithusersAPI_auto.getAll();
    }
}

document.addEventListener("DOMContentLoaded", main);