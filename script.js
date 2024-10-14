// Respuestas correctas para la actividad 6
const correctAnswers = [
    "soñaba", "gustaba", "hacía", "Decidió", "despertó",
    "Tomó", "empacó", "fue", "llegó", "conoció", 
    "enseñaba", "tuvo", "mostró", "pintó", "quedó", 
    "gustaron", "decidió", "regresó", "Miró", "vió", 
    "Tomó", "pintó", "usó", "llevó", "quedaron", 
    "dijo", "empezó", "gustaba", "pintaba", "veía", 
    "recordaba", "mostró", "vieron", "felicitaron", 
    "sonrió", "pensó"
];

// Función para comprobar respuestas
function checkAnswers() {
    for (let i = 1; i <= correctAnswers.length; i++) {
        let userInput = document.getElementById(`verb${i}`).value.trim();
        if (userInput === correctAnswers[i - 1]) {
            document.getElementById(`verb${i}`).style.backgroundColor = "lightgreen";
        } else {
            document.getElementById(`verb${i}`).style.backgroundColor = "lightcoral";
        }
    }
}

// Función para revelar respuestas
function revealAnswers() {
    for (let i = 1; i <= correctAnswers.length; i++) {
        document.getElementById(`verb${i}`).value = correctAnswers[i - 1];
        document.getElementById(`verb${i}`).style.backgroundColor = "lightgreen";
    }
}

// Lógica de acordeones
const accButtons = document.querySelectorAll(".accordion-btn");

accButtons.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

// Variables necesarias
const canvas = document.getElementById('paint-canvas');
const ctx = canvas.getContext('2d');
const backgroundImage = document.getElementById('background-image');
const colorPicker = document.getElementById('color-picker');
const clearButton = document.getElementById('clear-button');
const downloadButton = document.getElementById('download-button');

// Dimensiones del canvas según la imagen de fondo
function resizeCanvas() {
  canvas.width = backgroundImage.width;
  canvas.height = backgroundImage.height;
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

// Inicializamos el canvas
backgroundImage.onload = resizeCanvas;
window.onresize = resizeCanvas;

// Variables para dibujar
let isDrawing = false;
let currentColor = colorPicker.value;

// Cambiar el color del lápiz
colorPicker.addEventListener('change', (event) => {
  currentColor = event.target.value;
});

// Comenzar a dibujar
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  ctx.moveTo(event.offsetX, event.offsetY);
});

// Dibujar cuando se mueve el mouse
canvas.addEventListener('mousemove', (event) => {
  if (isDrawing) {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
});

// Terminar de dibujar
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.beginPath();
});

// Limpiar el canvas
clearButton.addEventListener('click', () => {
  resizeCanvas(); // Volvemos a cargar la imagen de fondo
});

// Descargar la imagen
downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'mi_dibujo.png';
  link.href = canvas.toDataURL();
  link.click();
});
