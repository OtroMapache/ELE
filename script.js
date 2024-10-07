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
        simple1: "salí",
        simple2: "cenamos",
        simple3: "fueron",
        simple4: "vi"
    };
    validateAnswers("exerciseSimple", answers, "simpleFeedback");
}

function revealSimple() {
    const answers = {
        simple1: "salí",
        simple2: "cenamos",
        simple3: "fueron",
        simple4: "vi"
    };
    revealAnswers(answers, "simpleFeedback");
}

// Check answers for Pretérito Indefinido
function checkIndefinido() {
    const answers = {
        indefinido1: "estudiaba",
        indefinido2: "trabajaba",
        indefinido3: "íbamos",
        indefinido4: "leían"
    };
    validateAnswers("exerciseIndefinido", answers, "indefinidoFeedback");
}

function revealIndefinido() {
    const answers = {
        indefinido1: "estudiaba",
        indefinido2: "trabajaba",
        indefinido3: "íbamos",
        indefinido4: "leían"
    };
    revealAnswers(answers, "indefinidoFeedback");
}

// Check answers for both tenses
function checkBoth() {
    const answers = {
        both1: "jugaba",
        both2: "volví",
        both3: "solía",
        both4: "vi"
    };
    validateAnswers("exerciseBoth", answers, "bothFeedback");
}

function revealBoth() {
    const answers = {
        both1: "jugaba",
        both2: "volví",
        both3: "solía",
        both4: "vi"
    };
    revealAnswers(answers, "bothFeedback");
}

// General validation and reveal functions
function validateAnswers(formId, answers, feedbackId) {
    const form = document.getElementById(formId);
    let feedback = "Resultados: <br>";
    let correct = true;

    for (const [key, value] of Object.entries(answers)) {
        const input = document.getElementById(key).value;
        if (input === value) {
            feedback += `${value} - Correcto<br>`;
        } else {
            feedback += `${input} - Incorrecto, la respuesta correcta es: ${value}<br>`;
            correct = false;
        }
    }

    document.getElementById(feedbackId).innerHTML = feedback;
}

function revealAnswers(answers, feedbackId) {
    let feedback = "Respuestas correctas: <br>";
    for (const [key, value] of Object.entries(answers)) {
        feedback += `${key}: ${value}<br>`;
    }
    document.getElementById(feedbackId).innerHTML = feedback;
}

