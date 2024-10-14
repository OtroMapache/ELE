const checkBtn = document.getElementById("checkBtn");
const revealBtn = document.getElementById("revealBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const verbs = [
        "soñaba", "gustaba", "hacía", "Decidió", "despertó", "Tomó", "empacó", "fue",
        "llegó", "conoció", "enseñaba", "tuvo", "mostraó", "pintó", "quedó",
        "gustaron", "decidió", "regresó", "Miró", "vió", "Tomó", "pintó",
        "usó", "llevó", "quedaron", "dijo", "empezó", "gustaba", "pintaba",
        "veía", "recordaba", "mostró", "vieron", "felicitaron", "sonrió", "pensó"    
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
const baseImage = document.getElementById('baseImage');

let drawing = false;

// Dibuja la imagen en el lienzo
baseImage.onload = () => {
    context.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
};

// Función para empezar a dibujar
canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    draw(e);
});

// Detiene el dibujo
canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.beginPath();
});

// Maneja el movimiento del mouse
canvas.addEventListener('mousemove', draw);

// Dibuja en el lienzo
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

// Limpia el lienzo
clearBtn.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseImage, 0, 0, canvas.width, canvas.height); // Redibuja la imagen base
});

// Guarda el dibujo
saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
    saveMessage.textContent = 'Dibujo guardado como dibujo.png';
});
