document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('map-screen').classList.remove('hidden');
});

document.getElementById('select-destination').addEventListener('click', function() {
    document.getElementById('map-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    displayQuestion();
});

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    
    const question = "ชายที่พบสมบัติในทุ่งทำอะไรเพื่อได้มันมา?";
    const choices = [
        "เก็บมันไว้เฉยๆ",
        "ขายทุกอย่างที่มีเพื่อซื้อทุ่งนั้น",
        "ให้คนอื่นไป"
    ];

    questionElement.textContent = question;
    choicesElement.innerHTML = '';

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', function() {
            document.getElementById('question-screen').classList.add('hidden');
            document.getElementById('treasure-screen').classList.remove('hidden');
        });
        choicesElement.appendChild(button);
    });
}
