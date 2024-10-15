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
const toolPicker = document.getElementById('tool-picker');
const brushSize = document.getElementById('brush-size');
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
let currentTool = 'pencil';
let currentColor = colorPicker.value;
let lineWidth = brushSize.value;

// Cambiar el color del lápiz
colorPicker.addEventListener('change', (event) => {
  currentColor = event.target.value;
});

// Cambiar el grosor del lápiz
brushSize.addEventListener('input', (event) => {
  lineWidth = event.target.value;
});

// Cambiar la herramienta de dibujo
toolPicker.addEventListener('change', (event) => {
  currentTool = event.target.value;
});

// Comenzar a dibujar
canvas.addEventListener('mousedown', (event) => {
  if (currentTool === 'pencil') {
    isDrawing = true;
    ctx.moveTo(event.offsetX, event.offsetY);
  } else if (currentTool === 'fill') {
    floodFill(event.offsetX, event.offsetY, hexToRgb(currentColor));
  }
});

// Dibujar cuando se mueve el mouse
canvas.addEventListener('mousemove', (event) => {
  if (isDrawing && currentTool === 'pencil') {
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  }
});

// Terminar de dibujar
canvas.addEventListener('mouseup', () => {
  if (currentTool === 'pencil') {
    isDrawing = false;
    ctx.beginPath();
  }
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

// Función para realizar el relleno (flood fill)
function floodFill(x, y, fillColor) {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;
  const stack = [[x, y]];
  const targetColor = getPixelColor(x, y, pixels, canvas.width);
  
  while (stack.length > 0) {
    const [cx, cy] = stack.pop();
    const currentColor = getPixelColor(cx, cy, pixels, canvas.width);
    
    if (colorsMatch(currentColor, targetColor)) {
      setPixelColor(cx, cy, fillColor, pixels, canvas.width);
      stack.push([cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]);
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
}

// Obtener el color de un píxel
function getPixelColor(x, y, pixels, width) {
  const index = (y * width + x) * 4;
  return [pixels[index], pixels[index + 1], pixels[index + 2], pixels[index + 3]];
}

// Establecer el color de un píxel
function setPixelColor(x, y, fillColor, pixels, width) {
  const index = (y * width + x) * 4;
  pixels[index] = fillColor[0];
  pixels[index + 1] = fillColor[1];
  pixels[index + 2] = fillColor[2];
  pixels[index + 3] = 255; // Alpha
}

// Comparar colores
function colorsMatch(c1, c2) {
  return c1[0] === c2[0] && c1[1] === c2[1] && c1[2] === c2[2];
}

// Convertir hex a RGB
function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}
// Lnuevo
document.getElementById('save-button').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'texto_gato_artista.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url); // Limpia el objeto URL
});
