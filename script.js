
const accordions = document.querySelectorAll(".accordion-title");

accordions.forEach(accordion => {
    accordion.addEventListener("click", function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});

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









