// Funciones para el acordeón
var acc = document.getElementsByClassName("accordion-button");
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Funciones para la actividad de completar (ambos pretéritos)
function checkFillIn() {
    const answers = {
        verb1: 'soñaba',
        verb2: 'gustaba',
        verb3: 'hacía',
        verb4: 'tuvo',
        verb5: 'dio',
        verb6: 'creaba',
        verb7: 'pintaba'
    };

    Object.keys(answers).forEach(function(id) {
        const userAnswer = document.getElementById(id).value.toLowerCase().trim();
        if (userAnswer === answers[id]) {
            document.getElementById(id).style.backgroundColor = 'lightgreen'; // Respuesta correcta
        } else {
            document.getElementById(id).style.backgroundColor = 'lightcoral'; // Respuesta incorrecta
        }
    });
}

function revealFillIn() {
    const answers = {
        verb1: 'soñaba',
        verb2: 'gustaba',
        verb3: 'hacía',
        verb4: 'tuvo',
        verb5: 'dio',
        verb6: 'creaba',
        verb7: 'pintaba'
    };

    Object.keys(answers).forEach(function(id) {
        document.getElementById(id).value = answers[id]; // Revelar la respuesta correcta
        document.getElementById(id).style.backgroundColor = 'lightgreen'; // Marcar como correcto
    });
}

// Funciones para la actividad de matching (Pretérito Simple)
function checkMatching() {
    alert('Función de comprobar pendiente');
}

function revealMatching() {
    alert('Función de revelar respuestas pendiente');
}

// Actividad de dibujo
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

function startDrawing(e) {
    drawing = true;
    draw(e);
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'mi_dibujo.png';
    link.click();
}

// Funciones para el crucigrama (Pretérito Indefinido)
function checkCrossword() {
    alert('Función de comprobar crucigrama pendiente');
}

function revealCrossword() {
    alert('Función de revelar respuestas del crucigrama pendiente');
}
