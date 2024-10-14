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

// Variables para dibujar
let isDrawing = false;
let currentTool = 'pencil';
let currentColor = colorPicker.value;
let lineWidth = brushSize.value;

// Dimensiones del canvas según la imagen de fondo o tamaño del dispositivo
function resizeCanvas() {
  canvas.width = window.innerWidth * 0.9; // Ajuste dinámico del ancho (90% de la pantalla)
  canvas.height = window.innerHeight * 0.7; // Ajuste dinámico de la altura (70% de la pantalla)
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}
resizeCanvas();
window.onresize = resizeCanvas;

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

// Eventos de mouse
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Eventos táctiles para dispositivos móviles
canvas.addEventListener('touchstart', startDrawingTouch, false);
canvas.addEventListener('touchmove', drawTouch, false);
canvas.addEventListener('touchend', stopDrawingTouch, false);
canvas.addEventListener('touchcancel', stopDrawingTouch, false);

// Iniciar dibujo con el mouse
function startDrawing(event) {
  if (currentTool === 'pencil') {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
  } else if (currentTool === 'fill') {
    floodFill(event.offsetX, event.offsetY, hexToRgb(currentColor));
  }
}

// Iniciar dibujo con el toque
function startDrawingTouch(event) {
  event.preventDefault();
  if (currentTool === 'pencil') {
    isDrawing = true;
    const touch = event.touches[0];
    const touchX = touch.clientX - canvas.offsetLeft;
    const touchY = touch.clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.moveTo(touchX, touchY);
  }
}

// Dibujar con el mouse
function draw(event) {
  if (!isDrawing || currentTool !== 'pencil') return;
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

// Dibujar con el toque
function drawTouch(event) {
  event.preventDefault();
  if (!isDrawing || currentTool !== 'pencil') return;
  const touch = event.touches[0];
  const touchX = touch.clientX - canvas.offsetLeft;
  const touchY = touch.clientY - canvas.offsetTop;
  ctx.strokeStyle = currentColor;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(touchX, touchY);
  ctx.stroke();
}

// Terminar el dibujo con el mouse
function stopDrawing() {
  if (currentTool === 'pencil') {
    isDrawing = false;
    ctx.beginPath();
  }
}

// Terminar el dibujo con el toque
function stopDrawingTouch() {
  if (currentTool === 'pencil') {
    isDrawing = false;
    ctx.beginPath();
  }
}

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
