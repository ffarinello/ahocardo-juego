const palabrasRandom = [
    "Mariposa",
    "Teléfono",
    "Montaña",
    "Sombra",
    "Radiante",
    "Candelabro",
    "Plátano",
    "Espiral",
    "Piano",
    "Murciélago",
];

//CREO UN DIV DE EJEMPLO
const div = document.querySelector(".contenedor");

let indiceAleatorio = Math.floor(Math.random() * palabrasRandom.length);
let palabraSeleccionada = palabrasRandom[indiceAleatorio];
// console.log(palabraSeleccionada);

palabraSeleccionada.split("").forEach((letra) => {
    console.log(palabraSeleccionada);
    const span = document.createElement("span");
    span.textContent = "_";
    div.appendChild(span);
});

// 10 palabras;
// elegir aleatoreamente una palabra;
// mostrar '_' por cada letra de la palabra aleatoria;
