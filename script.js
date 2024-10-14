const correctAnswers = {
    verb1: 'soñar',
    verb2: 'gustar',
    verb3: 'hacer',
    verb4: 'inscribir',
    verb5: 'despertar',
    verb6: 'empaquetar',
    verb7: 'ir',
    verb8: 'llegar',
    verb9: 'enseñar',
    verb10: 'tener',
    verb11: 'mostrar',
    verb12: 'pintar',
    verb13: 'quedar',
    verb14: 'gustar',
    verb15: 'regresar',
    verb16: 'ver',
    verb17: 'empezar',
    verb18: 'pintar',
    verb19: 'llevar',
    verb20: 'quedar',
    verb21: 'decir',
    verb22: 'empezar',
    verb23: 'gustar',
    verb24: 'pintar',
    verb25: 'ver',
    verb26: 'recordar',
    verb27: 'mostrar',
    verb28: 'ver',
    verb29: 'sonreír',
    verb30: 'pensar',
};

document.getElementById('checkAnswers').addEventListener('click', () => {
    let score = 0;
    for (const [key, correctAnswer] of Object.entries(correctAnswers)) {
        const userInput = document.getElementById(key).value.trim().toLowerCase();
        if (userInput === correctAnswer) {
            score++;
        }
    }
    document.getElementById('result').innerText = `Tienes ${score} respuestas correctas de ${Object.keys(correctAnswers).length}.`;
});

// Obtener el canvas y su contexto
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

// Variables para dibujar
let isDrawing = false;

// Cargar la imagen base
const img = new Image();
img.src = "Gato_Artista_pintura.png"; // Reemplaza esta ruta con la ruta correcta de tu imagen
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Funciones de dibujo
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

function startDrawing() {
    isDrawing = true;
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(event) {
    if (!isDrawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Función para borrar el canvas (y volver a cargar la imagen base)
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Vuelve a cargar la imagen base
}

// Función para guardar el dibujo
function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'mi_dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
}








