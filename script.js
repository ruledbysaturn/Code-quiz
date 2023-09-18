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

function showQuestion(q) {
    let titleDiv = document.getElementById("title");
    titleDiv.textContent = q.title;
    let options = document.querySelectorAll('.choices');
    options.forEach(function(element, index){
        element.textContent = q.choices[index];
    })
    element.addEventListener("click", function(){
        if(q.correctAnswer == index) {
            console.log ('Correct!');
        }
        else {
            console.log('Wrong');
        }
    })
}
var btn = document.getElementById('start');
btn.addEventListener('click', function(){
    console.log('Clicked');
})