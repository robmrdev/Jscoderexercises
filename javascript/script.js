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
        option.addEventListener("click", () => checkAnswer(index + 1));
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

    const quiz = document.getElementById("quiz");
    quiz.remove();

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
showResult();
}
    function showResult() {
        const outcomeDiv = document.getElementById("outcome");
        const selectedHouse = localStorage.getItem("selectedHouse");
        outcomeDiv.innerHTML = "";
        const houseImg = document.createElement("img");
        const houseText = document.createElement("p");

        switch (selectedHouse) {
            case "Gryffindor":
                houseImg.src = "./images/gryffindor.png";
                houseText.textContent = "¡Felicitaciones! Eres valiente, decidido y justo, y por eso has sido seleccionado para Gryffindor.";
                break;
            case "Slytherin":
                houseImg.src = "./images/slytherin.png";
                houseText.textContent = "¡Felicitaciones! Eres astuto, ambicioso y determinado, y por eso has sido seleccionado para Slytherin.";
                break;
            case "Ravenclaw":
                houseImg.src = "./images/ravenclaw.png";
                houseText.textContent = "¡Felicitaciones! Eres inteligente, creativo y perspicaz, y por eso has sido seleccionado para Ravenclaw.";
                break;
            case "Hufflepuff":
                houseImg.src = "./images/hufflepuff.png";
                houseText.textContent = "¡Felicitaciones! Eres leal, trabajador y justo, y por eso has sido seleccionado para Hufflepuff.";
                break;
            default:
                break;
        }

        outcomeDiv.appendChild(houseImg);
        outcomeDiv.appendChild(houseText);
    }


loadQuestion();