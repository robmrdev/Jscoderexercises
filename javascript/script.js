const preguntas = [
    {
        pregunta: "¿Cuál es tu asignatura favorita?",
        opciones: [
            "Defensa contra las artes oscuras",
            "Pociones",
            "Adivinacion",
            "Herbologia",
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
        {
        pregunta: "¿Qué lugar del mundo mágico te gustaría visitar?",
        opciones:[
            "Hogsmeade",
            "El Callejón Knockturn",
            "El Ministerio de Magia",
            "La reserva Natural de Dragones"
        ]
        },
        {
            pregunta: "¿Con cuál de estas criaturas mágicas te identificas más?",
            opciones:[
                "Hipogrifo",
                "Mantícora",
                "Esfinge",
                "Centauro"
            ]
        }
];
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
let currentQuestion = 0;
const respuestas = [];

function loadQuestion() {
    const pregunta = preguntas[currentQuestion];
    questionEl.textContent = pregunta.pregunta;
    optionsEl.innerHTML = "";
    pregunta.opciones.forEach((opcion, indice) => {
        const option = document.createElement("button");
        option.textContent = opcion;
        option.onclick = () => checkAnswer(indice + 1);
        optionsEl.appendChild(option);
    });
}

function checkAnswer(selected) {
    respuestas.push(selected);
    currentQuestion++;
    if (currentQuestion < preguntas.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const casas = {
        Gryffindor: 0,
        Slytherin: 0,
        Ravenclaw: 0,
        Hufflepuff: 0,
    };

    respuestas.forEach((respuesta) => {
        switch (respuesta) {
            case 1:
                casas.Gryffindor++;
                break;
            case 2:
                casas.Slytherin++;
                break;
            case 3:
                casas.Ravenclaw++;
                break;
            case 4:
                casas.Hufflepuff++;
                break;
            default:
                break;
        }
    });

    const casasOrdenadas = Object.entries(casas).sort((a, b) => b[1] - a[1]);
    const casaGanadora = casasOrdenadas[0][0];
//guardamos el resultado en el local Storage
localStorage.setItem("casaGanadora", casaGanadora);

// Agregamos el resultado al DOM
const resultadoDiv = document.getElementById("resultado");
resultadoDiv.innerHTML = `Fuiste seleccionad@ para la casa ${localStorage.getItem("casaGanadora")}!!`;
}

loadQuestion();