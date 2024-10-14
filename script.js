function togglePanel(button) {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

document.getElementById("checkBtn").addEventListener("click", function() {
    const correctAnswers = [
        "soñaba",
        "gustaba",
        "hacía",
        "decidió",
        "despertó",
        "empaquetó",
        "fue",
        "llegó",
        "enseñaba",
        "tuvo",
        "mostró",
        "pintaba",
        "quedó",
        "gustaron",
        "decidió",
        "pintó",
        "pintó",
        "llevó",
        "quedaron",
        "dijo",
        "empezó"
    ];

    let score = 0;
    const inputs = document.querySelectorAll("input[type='text']");
    
    inputs.forEach((input, index) => {
        if (input.value.trim() === correctAnswers[index]) {
            score++;
            input.style.backgroundColor = "lightgreen"; // Correct answer
        } else {
            input.style.backgroundColor = "lightcoral"; // Wrong answer
        }
    });

    const resultMessage = `Has acertado ${score} de ${correctAnswers.length} respuestas.`;
    document.getElementById("result").innerText = resultMessage;
});

document.getElementById("revealBtn").addEventListener("click", function() {
    const inputs = document.querySelectorAll("input[type='text']");
    
    inputs.forEach((input, index) => {
        input.value = correctAnswers[index]; // Reveal correct answers
        input.style.backgroundColor = "lightyellow"; // Change background color to indicate answers are revealed
    });

    const resultMessage = "Respuestas reveladas.";
    document.getElementById("result").innerText = resultMessage;
});
