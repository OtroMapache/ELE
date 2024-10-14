
const accordions = document.querySelectorAll(".accordion-title");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

const correctAnswers = [
    "soñaba", "gustaba", "hacía", "inscribió", "despertó", 
    "empaquetó", "fue", "llegó", "enseñaba", "tuvo", 
    "mostró", "pintaba", "quedó", "gustaron", "decidió", 
    "pintó", "llevó", "mostró", "dijo", "empezó", 
    "gustaba", "recordaba", "mostró", "felicitaron", "sonrió", 
    "encontró"
];

function checkAnswers() {
    let correct = 0;
    
    for (let i = 1; i <= correctAnswers.length; i++) {
        const userInput = document.getElementById(`verb${i}`).value;
        if (userInput.toLowerCase() === correctAnswers[i - 1]) {
            correct++;
        }
    }
    document.getElementById('resultDiv').innerHTML = `Respuestas correctas: ${correct}/${correctAnswers.length}`;
}

function revealAnswers() {
    for (let i = 1; i <= correctAnswers.length; i++) {
        document.getElementById(`verb${i}`).value = correctAnswers[i - 1]; // Mostrar respuestas correctas
    }
}

function togglePanel(button) {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}









