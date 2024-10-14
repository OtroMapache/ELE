function togglePanel(button) {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
}

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
        "decidió",
        "despertó",
        "empaquetó",
        "fue",
        "llegó",
        "enseñaba",
        "tuvo",
        "mostró",
        "pintó",
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
    const inputs = document.querySelectorAll("input[type='text']");
    
    inputs.forEach((input, index) => {
        input.value = correctAnswers[index]; // Reveal correct answers
        input.style.backgroundColor = "lightyellow"; // Change background color to indicate answers are revealed
    });

    const resultMessage = "Respuestas reveladas.";
    document.getElementById("result").innerText = resultMessage;
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const colorButtons = document.querySelectorAll('.colorButton');
let currentColor = 'black';
let painting = false;

// Cargar la imagen de fondo
const img = new Image();
img.src = 'Gato_Artista_pintura.png';
img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Iniciar el dibujo
canvas.addEventListener('mousedown', (e) => {
    painting = true;
    draw(e);
});

// Finalizar el dibujo
canvas.addEventListener('mouseup', () => {
    painting = false;
    ctx.beginPath();
});

// Dibujar en el lienzo
canvas.addEventListener('mousemove', (e) => {
    if (painting) {
        draw(e);
    }
});

// Seleccionar color
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentColor = button.style.backgroundColor;
        ctx.strokeStyle = currentColor;
    });
});

// Función de dibujo
function draw(e) {
    ctx.lineWidth = 5; // Ajusta el tamaño del pincel
    ctx.lineCap = 'round'; // Forma del pincel
    ctx.strokeStyle = currentColor;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

// Descargar imagen
document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'Gato_Artista_dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
});
