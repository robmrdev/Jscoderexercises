// Definimos las preguntas y respuestas
const preguntas = [
    {
    pregunta: "¿Cuál es tu asignatura favorita?",
    opciones: [
        "Defensa contra las artes oscuras",
        "Herbologia",
        "Adivinacion",
        "Pociones",
    ],
    },
    {
    pregunta: "¿Cuál es tu animal favorito?",
    opciones: [
        "Leon",
        "Serpiente",
        "Aguila",
        "Tejon"
    ],
    },
    {
    pregunta: "¿Qué cualidad valoras más?",
    opciones: [
        "Valentia",
        "Astucia",
        "Inteligencia",
        "Lealtad"
    ],
    },
];

// Función que muestra la pregunta y opciones al usuario
function mostrarPregunta(pregunta) {
let mensaje = pregunta.pregunta + "\n";
pregunta.opciones.forEach((opcion, indice) => {
    mensaje += `${indice + 1}. ${opcion}\n`;
});

let respuesta;
do {
    respuesta = prompt(mensaje);
    if (!pregunta.opciones.includes(respuesta)) {
        alert("Esta no es una de las opciones! Selecciona una.");
    }
} while (!pregunta.opciones.includes(respuesta));

return respuesta;
}

// Función principal que ejecuta el quiz
function hacerQuiz() {
const respuestas = [];
preguntas.forEach((pregunta) => {
const respuesta = mostrarPregunta(pregunta);
respuestas.push(respuesta);
});

// Determinamos la casa ganadora
const casas = {
    Gryffindor: 0,
    Slytherin: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
};

respuestas.forEach((respuesta) => {
    switch (respuesta) {
        case "1":
        casas.Gryffindor++;
        break;
        case "2":
        casas.Slytherin++;
        break;
        case "3":
        casas.Ravenclaw++;
        break;
        case "4":
        casas.Hufflepuff++;
        break;
        default:
        break;
    }
});

// Ordenamos las casas por puntaje y mostramos la ganadora
const casasOrdenadas = Object.entries(casas).sort((a, b) => b[1] - a[1]);
const casaGanadora = casasOrdenadas[0][0];
alert(`Fuiste seleccionad@ para la casa ${casaGanadora}!!`);
}

// Ejecutamos la función principal
hacerQuiz();