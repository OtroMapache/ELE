function checkAnswers() {
    const answers = {
        verb1: "estaba",
        verb2: "llamó",
        verb3: "vio",
        verb4: "hablaba",
        verb5: "hacía"
    };

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

    document.getElementById("feedback").innerHTML = feedback;
}
