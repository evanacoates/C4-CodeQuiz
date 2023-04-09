const quiz = document.getElementById('quiz');
const questionDis = document.getElementById('question');
const choicesDis = document.getElementById('choices');
const submit = document.getElementById('submit');
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', startQuiz);

//creating the questions
const questions = [
  {
    question: 'What is the http error code that indicates the server is unable to fulfill a request?',
    choices: ['600', '500', '401', '400'],
    correctAnswer: '500'
  },
  {
    question: '"Which of the following defines a JavaScript file?"',
    choices: ['.jvs', '.js', '.script', '.jscript'],
    correctAnswer: '.js'
  },
  {
    question: 'Is coding fun?',
    choices: ['yes', 'no', 'maybe', 'ask me on April 17th'],
    correctAnswer: 'yes'
  }
];

let runningQuestion = 0;

//hide start button and display quiz
function startQuiz() {
  startBtn.style.display = 'none';
  quiz.style.display = 'block';
}

//created function to display the appropriate question
function displayQuestion() {
  const question = questions[runningQuestion];
  questionDis.textContent = question.question;
  choicesDis.innerHTML = '';
  question.choices.forEach(choice => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(choice));
    choicesDis.appendChild(label);
  });
}
//created function to check answers 
function checkAnswer() {
  const selected = document.querySelector('input[name=choice]:checked');
  if (!selected) return;
  const correctAnswer = selected.value;
  if (correctAnswer === questions[runningQuestion].correctAnswer) {
    alert('Correct! Nice Work!');
  } else {
    alert(`Incorrect! The correct answer was ${questions[runningQuestion].correctAnswer}`);
  }
  runningQuestion++;
  if (runningQuestion === questions.length) {
    quiz.innerHTML = '<h2>You have completed the quiz! Happy coding!</h2>';
  } else {
    displayQuestion();
  }
}

//displays question and invokes checkAnswer on mouse click
displayQuestion();
submit.addEventListener('click', checkAnswer);


