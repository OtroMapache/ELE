// Sopa de Letras
// No requiere funcionalidad dinámica, simplemente es visual.

// Crucigrama (basado en Mango Crucigram)
document.addEventListener('DOMContentLoaded', function () {
    var crossword = new Crossword('crossword', 10, 10);
    crossword.setCell(1, 0, 'C');
    crossword.setCell(2, 0, 'A');
    crossword.setCell(3, 0, 'M');
    crossword.setCell(4, 0, 'I');
    crossword.setCell(5, 0, 'N');
    crossword.setCell(6, 0, 'A');
    crossword.setCell(7, 0, 'R');

    crossword.setCell(0, 1, 'A');
    crossword.setCell(0, 2, 'P');
    crossword.setCell(0, 3, 'R');
    crossword.setCell(0, 4, 'E');
    crossword.setCell(0, 5, 'N');
    crossword.setCell(0, 6, 'D');
    crossword.setCell(0, 7, 'E');
    crossword.setCell(0, 8, 'R');

    crossword.render();
});

// Llenar Espacios con Pretéritos
function checkAnswers() {
    let answers = {
        verb1: 'soñaba',
        verb2: 'gustaba',
        verb3: 'hacía',
        verb4: 'inscribió',
        verb5: 'despertó',
        verb6: 'empaquetó',
        verb7: 'fue',
        verb8: 'llegó',
        verb9: 'enseñaba',
        verb10: 'tuvo'
    };

    for (let key in answers) {
        let userAnswer = document.getElementById(key).value.toLowerCase();
        if (userAnswer === answers[key]) {
            document.getElementById(key).style.backgroundColor = 'lightgreen';
        } else {
            document.getElementById(key).style.backgroundColor = 'lightcoral';
        }
    }
}

function revealAnswers() {
    let answers = {
        verb1: 'soñaba',
        verb2: 'gustaba',
        verb3: 'hacía',
        verb4: 'inscribió',
        verb5: 'despertó',
        verb6: 'empaquetó',
        verb7: 'fue',
        verb8: 'llegó',
        verb9: 'enseñaba',
        verb10: 'tuvo'
    };

    for (let key in answers) {
        document.getElementById(key).value = answers[key];
        document.getElementById(key).style.backgroundColor = 'lightgreen';
    }
}

