// Lógica del acordeón para desplegar verticalmente
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });
});

// Funciones para comprobar actividades
function checkAnswers() {
    alert("Comprobando respuestas...");
}

function revealAnswers() {
    alert("Revelando respuestas correctas...");
}

function checkCrossword() {
    alert("Comprobando crucigrama...");
}

function revealCrossword() {
    alert("Revelando crucigrama...");
}

function checkFillGaps() {
    alert("Comprobando texto...");
}

function revealFillGaps() {
    alert("Revelando respuestas correctas...");
}

// Funcionalidad de la actividad de dibujo
let canvas = document.getElementById('drawingCanvas');
let ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', function(e) {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', function(e) {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', function() {
    drawing = false;
});

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    let link = document.createElement('a');
    link.download = 'Gato_Artista_pintura.png';
    link.href = canvas.toDataURL();
    link.click();
}


