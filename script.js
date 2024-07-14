function checkAnswer(question, correctOption) {
    const selectedOption = document.querySelector(`input[name="question${question}"]:checked`);
    const result = document.getElementById('result');
    if (selectedOption && selectedOption.value === correctOption) {
        result.innerHTML += `<p>Pregunta ${question}: ¡Correcto!</p>`;
        checkAllAnswers();
    } else {
        result.innerHTML += `<p>Pregunta ${question}: Incorrecto. La respuesta correcta es ${correctOption}.</p>`;
    }
}

function showNextQuestion() {
    const currentQuestion = document.querySelector('.question:not(.answered)');
    if (currentQuestion) {
        currentQuestion.classList.add('answered');
        const nextQuestion = currentQuestion.nextElementSibling;
        if (nextQuestion) {
            nextQuestion.classList.remove('hidden');
        }
    }
}

function checkAllAnswers() {
    const allQuestions = document.querySelectorAll('.question');
    let allCorrect = true;
    allQuestions.forEach(question => {
        if (!question.classList.contains('answered')) {
            allCorrect = false;
        }
    });

    if (allCorrect) {
        const specialImage = document.getElementById('specialImage');
        specialImage.classList.remove('hidden');
    }
}
