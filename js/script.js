document.addEventListener('DOMContentLoaded', function() {
//questions for quiz
var questionLine = [
{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
},

{
    title: "The condition in an if/else statement is enclosed with _______.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: 2
},

{
    title: "Arrays in Javascript can be used to store _____.",
    choices: ["numbers & strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3,
},

{
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: 2
},
 {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 3
}]

var currentQuestionDisplay = 0;
var score = 0;
var timeLeft = 60;

var startButton = document.getElementById('start-btn');
var timerEl = document.getElementById('timer');
var quizSection = document.querySelector('.quiz');

//event listener and function for start button

startButton.addEventListener("click", function () {
    startTimer();
    loadQuestion();
});

function startTimer() {
    var timer = setInterval(function () {
        timeLeft--;
        timerEl.textContent = 'Time: ' + timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function loadQuestion() {
    quizSection.style.display = 'block';
    startButton.style.display = 'none';
    
    var choicesList = document.querySelector('.choices-list');
    choicesList.style.display = 'none';

    var currentQuestion = questionLine[currentQuestionDisplay];
    var titleEl = document.getElementById('title');
    titleEl.textContent = currentQuestion.title;

    var choicesEl = document.querySelectorAll('.choices');
    for (var i = 0; i < choicesEl.length; i++) {
        choicesEl[i].textContent = currentQuestion.choices[i];
    }

    choicesList.style.display = 'block';

    for (var i = 0; i < choicesEl.length; i++) {
        choicesEl[i].addEventListener('click', function () {
            var userAnswer = this.textContent;
            checkAnswer(userAnswer, currentQuestion.correctAnswer);
        });
    }
}


function checkAnswer(userAnswer, correctAnswer) {
    const currentQuestionItem = questionLine[currentQuestionDisplay];

    if (userAnswer === currentQuestionItem.choices[correctAnswer]) {
        score++;
    } else {
        timeLeft -= 10;
        timeLeft = Math.max(0, timeLeft);
        timerEl.textContent = 'Time: ' + timeLeft;
    }

    if (currentQuestionDisplay < questionLine.length) {
        currentQuestionDisplay++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizSection.style.display = 'none';
    var finishedSection = document.querySelector('.finished');
    finishedSection.style.display = 'block';
    var finalScoreEl = document.querySelector('.finished p');
    finalScoreEl.textContent = 'Your final score is: ' + score;
}
});