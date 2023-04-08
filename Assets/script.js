const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const submitBtn = document.getElementById('submit');

const questions = [
  {
    question: 'What is the http error code that indicates the server is unable to fulfill a request?',
    choices: ['600', '500', '401', '400'],
    answer: '500'
  },
  {
    question: '"Which of the following defines a JavaScript file?"',
    choices: ['.jvs', '.js', '.script', '.jscript'],
    answer: '.js'
  },
  {
    question: 'Is coding fun?',
    choices: ['yes', 'no', 'maybe', 'ask me on the 17th of April'],
    answer: 'yes'
  }
];

let currentQuestion = 0;

function showQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  choicesEl.innerHTML = '';
  question.choices.forEach(choice => {
    const label = document.createElement('label');
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(choice));
    choicesEl.appendChild(label);
  });
}

function checkAnswer() {
  const selected = document.querySelector('input[name=choice]:checked');
  if (!selected) return;
  const answer = selected.value;
  if (answer === questions[currentQuestion].answer) {
    alert('Correct! Nice Work!');
  } else {
    alert(`Incorrect! The answer was ${questions[currentQuestion].answer}`);
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    quiz.innerHTML = '<h2>You have completed the quiz! Thanks for playing.</h2>';
  } else {
    showQuestion();
  }
}

showQuestion();
submitBtn.addEventListener('click', checkAnswer);

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  startBtn.style.display = 'none';
  quiz.style.display = 'block';
  
  // Call the showQuestion function to display the first question
  showQuestion();
}
