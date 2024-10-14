function togglePanel(button) {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

document.getElementById("checkBtn").addEventListener("click", function() {
    const correctAnswers = correctAnswers = {
        "verb1": "soñó",
        "verb2": "gustó",
        "verb3": "hizo",
        "verb4": "inscribió",
        "verb5": "despertó",
        "verb6": "empaquetó",
        "verb7": "fue",
        "verb8": "llegó",
        "verb9": "enseñó",
        "verb10": "tuvo",
        "verb11": "mostró",
        "verb12": "pintó",
        "verb13": "quedó",
        "verb14": "gustaron",
        "verb15": "regresó",
        "verb16": "vio",
        "verb17": "empezó",
        "verb18": "pintó",
        "verb19": "llevó",
        "verb20": "quedaron",
        "verb21": "dijo",
        "verb22": "empezó",
        "verb23": "gustó",
        "verb24": "pintó",
        "verb25": "vio",
        "verb26": "recordó",
        "verb27": "mostró",
        "verb28": "vieron",
        "verb29": "sonrió",
        "verb30": "se sintió",
        "verb31": "podía"
    };

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
