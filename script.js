// Respuestas correctas para la actividad 6
const correctAnswers = [
    "soñaba", "gustaba", "hacía", "Decidió", "despertó",
    "Tomó", "empacó", "fue", "llegó", "conoció", 
    "enseñaba", "tuvo", "mostró", "pintó", "quedó", 
    "gustaron", "decidió", "regresó", "Miró", "vió", 
    "Tomó", "pintó", "usó", "llevó", "quedaron", 
    "dijo", "empezó", "gustaba", "pintaba", "veía", 
    "recordaba", "mostró", "vieron", "felicitaron", 
    "sonrió", "pensó"
];

// Función para comprobar respuestas
function checkAnswers() {
    for (let i = 1; i <= correctAnswers.length; i++) {
        let userInput = document.getElementById(`verb${i}`).value.trim();
        if (userInput === correctAnswers[i - 1]) {
            document.getElementById(`verb${i}`).style.backgroundColor = "lightgreen";
        } else {
            document.getElementById(`verb${i}`).style.backgroundColor = "lightcoral";
        }
    }
}

// Función para revelar respuestas
function revealAnswers() {
    for (let i = 1; i <= correctAnswers.length; i++) {
        document.getElementById(`verb${i}`).value = correctAnswers[i - 1];
        document.getElementById(`verb${i}`).style.backgroundColor = "lightgreen";
    }
}

// Lógica de acordeones
const accButtons = document.querySelectorAll(".accordion-btn");

accButtons.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

