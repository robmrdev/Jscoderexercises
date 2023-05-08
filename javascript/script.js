const questions = [
    {
        question: "¿Cuál es tu asignatura favorita?",
        options: [
            "Defensa contra las artes oscuras",
            "Pociones",
            "Adivinacion",
            "Herbologia",
        ],
        },
        {
        question: "¿Cuál es tu animal favorito?",
        options: [
            "Leon",
            "Serpiente",
            "Aguila",
            "Tejon"
        ],
        },
        {
        question: "¿Qué cualidad valoras más?",
        options: [
            "Valentia",
            "Astucia",
            "Inteligencia",
            "Lealtad"
        ],
        },
        {
        question: "¿Qué lugar del mundo mágico te gustaría visitar?",
        options:[
            "Hogsmeade",
            "El Callejón Knockturn",
            "El Ministerio de Magia",
            "La reserva Natural de Dragones"
        ]
        },
        {
            question: "¿Con cuál de estas criaturas mágicas te identificas más?",
            options:[
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
const answers = [];

function loadQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = "";
    question.options.forEach((opcion, index) => {
        const option = document.createElement("button");
        option.textContent = opcion;
        option.onclick = () => checkAnswer(index + 1);
        optionsEl.appendChild(option);
    });
}

function checkAnswer(selected) {
    answers.push(selected);
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    const houses = {
        Gryffindor: 0,
        Slytherin: 0,
        Ravenclaw: 0,
        Hufflepuff: 0,
    };

    answers.forEach((answer) => {
        switch (answer) {
            case 1:
                houses.Gryffindor++;
                break;
            case 2:
                houses.Slytherin++;
                break;
            case 3:
                houses.Ravenclaw++;
                break;
            case 4:
                houses.Hufflepuff++;
                break;
            default:
                break;
        }
    });

    const houseInOrder = Object.entries(houses).sort((a, b) => b[1] - a[1]);
    const selectedHouse = houseInOrder[0][0];
//guardamos el resultado en el local Storage
localStorage.setItem("selectedHouse", selectedHouse);

// Agregamos el resultado al DOM
const outcomeDiv = document.getElementById("outcome");
outcomeDiv.innerHTML = `Fuiste seleccionad@ para la casa ${localStorage.getItem("selectedHouse")}!!`;
}

loadQuestion();