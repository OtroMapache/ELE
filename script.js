let accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        let content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Canvas de dibujo
let canvas = document.getElementById('drawingCanvas');
let ctx = canvas.getContext('2d');
let drawing = false;

// Cargar imagen base en el canvas
let img = new Image();
img.src = 'gato_artista_base.png'; // Nombre de la imagen base
img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Iniciar dibujo
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

// Borrar el lienzo y recargar la imagen base
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // Recargar la imagen base
}

// Guardar el dibujo como imagen
function saveCanvas() {
    let link = document.createElement('a');
    link.download = 'Gato_Artista_pintura.png';
    link.href = canvas.toDataURL();
    link.click();
}




