// script.js

function checkMatching() {
    const correctPairs = {
        "pintar": "pinté",
        "crear": "creé",
        "esculpir": "esculpí",
        "diseñar": "diseñé",
        "modelar": "modelé"
    };

    const userAnswers = {
        "pintar": document.getElementById("verb1").value,
        "crear": document.getElementById("verb2").value,
        "esculpir": document.getElementById("verb3").value,
        "diseñar": document.getElementById("verb4").value,
        "modelar": document.getElementById("verb5").value,
    };

    let correctCount = 0;

    for (let verb in correctPairs) {
        if (userAnswers[verb] === correctPairs[verb]) {
            correctCount++;
        }
    }

    alert("Has acertado " + correctCount + " de 5 pares.");
}

function revealMatching() {
    alert("Las respuestas correctas son:\n" +
        "pintar - pinté\n" +
        "crear - creé\n" +
        "esculpir - esculpí\n" +
        "diseñar - diseñé\n" +
        "modelar - modelé");
}

function checkCrossword() {
    // Aquí se implementará la lógica para comprobar el crucigrama
}

function revealCrossword() {
    // Aquí se implementará la lógica para revelar las respuestas del crucigrama
}

function checkFillIn() {
    const correctAnswers = {
        "verb1": "soñó",
        "verb2": "gustó",
        "verb3": "hizo",
        "verb4": "inscribió",
        "verb5": "despertó",
        "verb6": "empaquetó",
        "verb7": "fue",
        "verb8": "llegó",
        "verb9": "enseñó",
        "verb10": "tuvo",
        "verb11": "mostró",
        "verb12": "pintó",
        "verb13": "quedó",
        "verb14": "gustaron",
        "verb15": "regresó",
        "verb16": "vio",
        "verb17": "empezó",
        "verb18": "pintó",
        "verb19": "llevó",
        "verb20": "quedaron",
        "verb21": "dijo",
        "verb22": "empezó",
        "verb23": "gustó",
        "verb24": "pintó",
        "verb25": "vio",
        "verb26": "recordó",
        "verb27": "mostró",
        "verb28": "vieron",
        "verb29": "sonrió",
        "verb30": "se sintió",
        "verb31": "podía"
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    for (let verb in correctAnswers) {
        let userAnswer = document.getElementById(verb).value.trim();
        if (userAnswer === correctAnswers[verb]) {
            score++;
        }
    }

    document.getElementById("result").innerText = `Has acertado ${score} de ${totalQuestions} respuestas.`;
}









