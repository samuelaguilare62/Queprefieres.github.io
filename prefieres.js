const questions = [
  {
    question: "¿Qué prefieres?",
    options: ["Comer pizza de piña", "Comer sushi de anguila"]
  },
  {
    question: "¿Qué prefieres?",
    options: ["Ir a la playa", "Ir a la montaña"]
  },
  {
    question: "¿Qué prefieres?",
    options: ["Leer un libro", "Ver una película"]
  },
  {
    question: "¿Qué prefieres?",
    options: ["Ser rico y famoso", "Ser feliz y anónimo"]
  },
  {
    question: "¿Qué prefieres?",
    options: ["Comer chocolate", "Comer helado"]
  }
];

const questionContainer = document.querySelector(".question-container");
const questionEl = questionContainer.querySelector(".question");
const optionsEl = questionContainer.querySelector(".options");
const optionEls = optionsEl.querySelectorAll(".option");

let currentQuestionIndex = -1;

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    // Si ya no quedan preguntas, mostrar un mensaje de finalización
    questionEl.textContent = "¡Fin del juego!";
    optionsEl.innerHTML = "";
  } else {
    // Mostrar la siguiente pregunta y opciones
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionEls.forEach((optionEl, index) => {
      optionEl.textContent = currentQuestion.options[index];
    });
  }
}

// Mostrar la primera pregunta cuando se carga la página
showNextQuestion();

// Agregar un controlador de eventos de clic para cada opción
optionEls.forEach(optionEl => {
  optionEl.addEventListener("click", showNextQuestion);
});
