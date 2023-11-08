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
    correctAnswer: 0
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
        
        if (timeLeft <= 0 || currentQuestionDisplay >= questionLine.length) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function loadQuestion() {
    quizSection.style.display = 'block';
    startButton.style.display = 'none';
    var currentQuestion = questionLine[currentQuestionDisplay];
    var titleEl = document.getElementById('titel');
    titleEl.textContent = currentQuestion.title;

    var choicesEl = document.querySelectorAll('.choices');
    for (var i = 0; i < choicesEl.length; i++) {
        choicesEl[i].textContent = currentQuestion.choices[i];

        choicesEl[i].addEventListener('click', function() {
            var userAnswer = this.textContent;
            checkAnswer(userAnswer, currentQuestion.correctAnswer);
          });
    }
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === questionLine[currentQuestionDisplay].choices[correctAnswer]) {
        score++;
    }
    else{
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0;
        }
        timerEl.textContent = 'Time: ' + timeLeft;
    }

    currentQuestionDisplay++;
    if (currentQuestionDisplay < questionLine.length) {
        loadQuestion();
    } 
    else {
        endQuiz();
    }
}