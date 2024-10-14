const checkBtn = document.getElementById("checkBtn");
const revealBtn = document.getElementById("revealBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const verbs = [
        "soñar", "gustar", "hacer", "decidir", "despertar", "tomar", "empacar", "ir",
        "llegar", "conocer", "enseñar", "tener", "mostrar", "pintar", "quedar",
        "gustar", "decidir", "regresar", "mirar", "ver", "tomar", "pintar",
        "usar", "llevar", "quedaron", "decir", "empezar", "gustar", "pintar",
        "ver", "recordar", "mostrar", "felicitar", "sonreir", "pensar"
    ];
    let score = 0;

    verbs.forEach((verb, index) => {
        const userInput = document.getElementById(`verb${index + 1}`).value;
        if (userInput === verb) {
            score++;
        }
    });

    result.textContent = `Has acertado ${score} de ${verbs.length} respuestas.`;
});

revealBtn.addEventListener("click", () => {
    verbs.forEach((verb, index) => {
        document.getElementById(`verb${index + 1}`).value = verb;
    });
});

// Dibujo
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const saveMessage = document.getElementById('saveMessage');

let drawing = false;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.beginPath();
});

canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = colorPicker.value;

    context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    context.stroke();
    context.beginPath();
    context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

clearBtn.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
    saveMessage.textContent = 'Dibujo guardado como dibujo.png';
});
