// Función para activar los acordeones
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block'; // Alternar visibilidad
    });
});


function revealAnswers() {
    const correctAnswers = ["soñar", "gustar", "hacer", "inscribir", "despertar", "empaquetar", "ir", "llegar", "enseñar", "tener", "mostrar", "pintar", "quedar", "gustar", "regresar", "ver", "empezar", "pintar", "llevar", "quedar", "decir", "empezar", "gustar", "pintar", "recordar", "mostrar", "ver", "sonreír", "sentir", "poder"];
    
    for (let i = 1; i <= 31; i++) {
        document.getElementById(`verb${i}`).value = correctAnswers[i - 1]; // Mostrar respuestas correctas
    }
}


// Aquí sigue el resto de tus funciones


document.getElementById("checkBtn").addEventListener("click", function() {
    const correctAnswers = [
        "soñaba",
        "gustaba",
        "hacía",
        "Decidió",
        "despertó",
        "Tomó",
        "empacó",
        "fue",
        "llegó",
        "conoció",
        "enseñaba",
        "tuvo",
        "mostró",
        "pintó",
        "quedó",
        "gustaron",
        "decidió",
        "regresó",
        "Miró",
        "vió",
        "Tomó",
        "pintó",
        "usó",
        "llevó",
        "quedaron",
        "dijo",
        "empezó",
        "gustaba",
        "pintaba",
        "veía",
        "recordaba",
        "mostró",
        "vieron",
        "felicitaron",
        "sonrió",
        "pensó"
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
    const correctAnswers = [
        "soñaba",
        "gustaba",
        "hacía",
        "Decidió",
        "despertó",
        "Tomó",
        "empacó",
        "fue",
        "llegó",
        "conoció",
        "enseñaba",
        "tuvo",
        "mostró",
        "pintó",
        "quedó",
        "gustaron",
        "decidió",
        "regresó",
        "Miró",
        "vió",
        "Tomó",
        "pintó",
        "usó",
        "llevó",
        "quedaron",
        "dijo",
        "empezó",
        "gustaba",
        "pintaba",
        "veía",
        "recordaba",
        "mostró",
        "vieron",
        "felicitaron",
        "sonrió",
        "pensó"
    ];
    const inputs = document.querySelectorAll("input[type='text']");
    
    inputs.forEach((input, index) => {
        input.value = correctAnswers[index]; // Reveal correct answers
        input.style.backgroundColor = "lightyellow"; // Change background color to indicate answers are revealed
    });

    const resultMessage = "Respuestas reveladas.";
    document.getElementById("result").innerText = resultMessage;
});

// Dibujo


