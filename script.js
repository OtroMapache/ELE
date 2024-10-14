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
<section id="drawingSection">
    <h2>Actividad de Dibujo</h2>
    <img id="baseImage" src="Gato_Artista_pintura.png" alt="Imagen base" style="display: none;">
    <canvas id="drawingCanvas" style="border:1px solid #000;"></canvas>
    <input type="color" id="colorPicker" value="#000000">
    <button id="clearBtn">Limpiar</button>
    <button id="saveBtn">Guardar Dibujo</button>
    <p id="saveMessage"></p>
</section>

<script>
const canvas = document.getElementById('drawingCanvas');
const context = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
const saveBtn = document.getElementById('saveBtn');
const saveMessage = document.getElementById('saveMessage');
const baseImage = document.getElementById('baseImage');

let drawing = false;

// Dibuja la imagen en el lienzo después de que se carga
baseImage.onload = () => {
    canvas.width = baseImage.width;
    canvas.height = baseImage.height;
    context.drawImage(baseImage, 0, 0);
};

// Obtén la posición del mouse relativa al lienzo
function getMousePos(canvas, evt) {
    const rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

// Función para empezar a dibujar
canvas.addEventListener('mousedown', (e) => {
    drawing = true;

    // Inicia el dibujo en la posición actual del mouse
    const pos = getMousePos(canvas, e);
    context.beginPath();
    context.moveTo(pos.x, pos.y);
});

// Detiene el dibujo al soltar el mouse
canvas.addEventListener('mouseup', () => {
    drawing = false;
    context.beginPath();  // Reinicia el trazo
});

// Detiene el dibujo si el mouse sale del lienzo
canvas.addEventListener('mouseout', () => {
    drawing = false;
});

// Maneja el movimiento del mouse para dibujar
canvas.addEventListener('mousemove', (e) => {
    if (!drawing) return;

    const pos = getMousePos(canvas, e);
    context.lineWidth = 5;
    context.lineCap = 'round';
    context.strokeStyle = colorPicker.value;

    context.lineTo(pos.x, pos.y);  // Dibuja hasta la posición del mouse
    context.stroke();
    context.beginPath();
    context.moveTo(pos.x, pos.y);  // Inicia una nueva ruta desde el mouse
});

// Limpia el lienzo
clearBtn.addEventListener('click', () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(baseImage, 0, 0);  // Redibuja la imagen base
});

// Guarda el dibujo
saveBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'dibujo.png';
    link.href = canvas.toDataURL();
    link.click();
    saveMessage.textContent = 'Dibujo guardado como dibujo.png';
});
</script>

