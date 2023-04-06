let startBtn = document.getElementById('startBtn');
let quiz = document.getElementById('quiz');
let question = document.getElementById('questions');
let timer = document.getElementById('timer');
let answerA = document.getElementById('A');
let answerB = document.getElementById('B');
let answerC = document.getElementById('C');
let answerD = document.getElementById('D');
let quizScore = document.getElementById('quizScore')


startBtn.addEventListener ("click", startQuiz);

const questions = [{
    question : "What is the http error code that indicates the server is unable to fulfill a request?",
    answerA : "600",
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

const lastQuestion = questions.length -1;
let runningQuestion = 0;

function startQuiz(){
    startBtn.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";

    
}
function renderQuestion(){
    let q = questions[runningQuestion]

    question.innerHTML = "<p>"+ q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}
