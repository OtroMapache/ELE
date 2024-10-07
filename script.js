// Accordion functionality
const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
}

// Check answers for Pretérito Simple
function checkSimple() {
    const answers = {
        simple1: "corrí",
        simple2: "leyó"
    };
    validateExercise(answers, "simpleFeedback");
}

function revealSimple() {
    revealAnswers({
        simple1: "corrí",
        simple2: "leyó"
    }, "simpleFeedback");
}

// Check answers for Pretérito Indefinido
function checkIndefinido() {
    const answers = {
        indefinido1: "vivía",
        indefinido2: "iba"
    };
    validateExercise(answers, "indefinidoFeedback");
}

function revealIndefinido() {
    revealAnswers({
        indefinido1: "vivía",
        indefinido2: "iba"
    }, "indefinidoFeedback");
}

// Check answers for Both Pretéritos
function checkBoth() {
    const answers = {
        both1: "estuve",
        both2: "llamó",
        both3: "vio",
        both4: "hacía"
    };
    validateExercise(answers, "bothFeedback");
}

function revealBoth() {
    revealAnswers({
        both1: "estuve",
        both2: "llamó",
        both3: "vio",
        both4: "hacía"
    }, "bothFeedback");
}

// General validation function
function validateExercise(answers, feedbackId) {
    let feedback = "";
    let allCorrect = true;

    for (const [key, value] of Object.entries(answers)) {
        const userAnswer = document.getElementById(key).value.trim().toLowerCase();
        if (userAnswer !== value) {
            feedback += `Error en ${key}: Debía ser "${value}".<br>`;
            allCorrect = false;
        }
    }

    if (allCorrect) {
        feedback = "¡Todas las respuestas son correctas!";
    }

    document.getElementById(feedbackId).innerHTML = feedback;
}

// Reveal answers function
function revealAnswers(answers, feedbackId) {
    let feedback = "Respuestas:<br>";
    for (const [key, value] of Object.entries(answers)) {
        feedback += `${key}: ${value}<br>`;
    }
    document.getElementById(feedbackId).innerHTML = feedback;
}
