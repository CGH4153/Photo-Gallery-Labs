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

document.addEventListener("DOMContentLoaded", main);