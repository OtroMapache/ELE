// Funciones para la actividad de unir verbos
function checkMatching() {
    alert("Verificando las respuestas...");
    // Aquí iría la lógica para comprobar la actividad de unir.
}

function revealMatching() {
    alert("Revelando las respuestas correctas...");
    // Aquí mostrarías las respuestas correctas.
}

// Funciones para el crucigrama
function checkCrossword() {
    alert("Verificando el crucigrama...");
    // Aquí iría la lógica para comprobar el crucigrama.
}

function revealCrossword() {
    alert("Revelando las respuestas del crucigrama...");
    // Aquí mostrarías las respuestas correctas.
}

// Funciones para llenar los espacios
function checkFillIn() {
    alert("Verificando los verbos...");
    // Aquí iría la lógica para comprobar los verbos en el texto.
}

function revealFillIn() {
    alert("Revelando las respuestas correctas...");
    // Aquí mostrarías las respuestas correctas.
}

// Funciones para la actividad de dibujo
const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

let isDrawing = false;

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

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    const link = document.createElement('a');
    link.download = 'mi_dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
}





