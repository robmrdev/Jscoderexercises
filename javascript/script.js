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
//creamos una promesa para cargar las imagenes de las casas de manera asincronica
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
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
showSweetAlert();
}
    function showResult() {
        const outcomeDiv = document.getElementById("outcome");
        const selectedHouse = localStorage.getItem("selectedHouse");
        outcomeDiv.innerHTML = "";
        const houseImg = document.createElement("img");
        const houseText = document.createElement("p");
        //Definimos las rutas de cada imagen para la promesa
        const houseImages = {
            Gryffindor: "./images/gryffindor.png",
            Slytherin: "./images/slytherin.png",
            Ravenclaw: "./images/ravenclaw.png",
            Hufflepuff: "./images/hufflepuff.png",
        };
  // Carga la imagen de la casa ganadora
    loadImage(houseImages[selectedHouse])
    .then((img) => {
      // Muestra la imagen y el texto en el DOM
        const outcomeDiv = document.getElementById("outcome");
        outcomeDiv.innerHTML = "";
        const houseImg = img;
        const houseText = document.createElement("p");

        switch (selectedHouse) {
        case "Gryffindor":
            houseText.textContent =
            "¡Felicitaciones! Eres valiente, decidido y justo, y por eso has sido seleccionado para Gryffindor.";
            break;
        case "Slytherin":
            houseText.textContent =
            "¡Felicitaciones! Eres astuto, ambicioso y determinado, y por eso has sido seleccionado para Slytherin.";
            break;
        case "Ravenclaw":
            houseText.textContent =
            "¡Felicitaciones! Eres inteligente, creativo y perspicaz, y por eso has sido seleccionado para Ravenclaw.";
            break;
        case "Hufflepuff":
            houseText.textContent =
            "¡Felicitaciones! Eres leal, trabajador y justo, y por eso has sido seleccionado para Hufflepuff.";
            break;
        default:
            break;
        }

        outcomeDiv.appendChild(houseImg);
        outcomeDiv.appendChild(houseText);
    })
    .catch((err) => console.error(err));
}


    //definimos la alerta para reiniciar el Quiz
    function showSweetAlert() {
        setTimeout(function() {
            Swal.fire({
            width: "40vh",
            title: "¿Te gustaria intentarlo de nuevo?",
            background: 'url(./images/alertBg.jpg)',
            heightAuto:false,
            showCloseButton: true,
            showCancelButton: true,
            cancelButtonText:"No",
            focusConfirm: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    // si el usuario quiere repetir el quiz, recargamos la página
                    location.reload();
                }
                });
        }, 3000);
        }



loadQuestion();