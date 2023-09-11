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
const div = document.createElement("div");
div.textContent = "Creado con JS";
const seccion = document.querySelector(".contenedor");

seccion.appendChild(div);

console.log(div.textContent);

// Crear un div por cada letra que tenga la palabra.
// Los divs deben tener un valor por defecto (espacio vacío).
// Los divs deben tener un 'underline' donde iría la letra.
