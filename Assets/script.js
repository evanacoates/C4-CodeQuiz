let startBtn = document.getElementById('start');
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let timer = document.getElementById('timer');
let answerA = document.getElementById('A');
let answerB = document.getElementById('B');
let answerC = document.getElementById('C');
let answerD = document.getElementById('D');
let quizScore = document.getElementById('quizScore')

startBtn.addEventListener('click', startQuiz);

function startQuiz(){
    console.log('started')
    startBtn.classList.add('hide');
}

const questions = [{
    question : "What is the http error code that indicates the server is unable to fulfill a request?",
    answers: [
        { text; "600", correct: false},
        { text; "501", correct: true},
        { text; "401", correct: false},
        { text; "400", correct: false},

    
    answerB : "500",
    answerC : "401",
    answerD : "400",
    correct : "answerB"
},
{
    question : "Which of the following characters are used to create and end an array?",
    answerA : "{}",
    answerB : "==",
    answerC : "[]",
    answerD : "<>",
    correct : "answerC"
},
{
    question : "Which of the following defines a JavaScript file?",
    answerA : ".jvsc",
    answerB : ".js",
    answerC : ".jv",
    answerD : ".jscript",
    correct : "answerB"
},
{
    question : "CRUD is an acronym for which of the following?",
    answerA : "Create, replace, update, delete",
    answerB : "Create, replace, undo, delete",
    answerC : "Call, read, update, delete",
    answerD : "Create, read, update, delete",
    correct : "answerD"
},
{
    question : "Is coding fun?",
    answerA : "No",
    answerB : "Yes",
    answerC : "Sorta",
    answerD : "Lasagna",
    correct : "answerB"
}]

var timeRemaining = 30;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeRemaining == 0) {
    clearTimeout(timerId);
    doSomething();
  } else {
    elem.innerHTML = timeRemaining + ' seconds remaining';
    timeRemaining--;
  }}
