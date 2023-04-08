const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const submit = document.getElementById('submit');
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', startQuiz);


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
    choices: ['yes', 'no', 'maybe', 'ask me on April 17th'],
    answer: 'yes'
  }
];

let currentQ = 0;

function showQ() {
  const question = questions[currentQ];
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

function checkAns() {
  const selected = document.querySelector('input[name=choice]:checked');
  if (!selected) return;
  const answer = selected.value;
  if (answer === questions[currentQ].answer) {
    alert('Correct! Nice Work!');
  } else {
    alert(`Incorrect! The answer was ${questions[currentQ].answer}`);
  }
  currentQ++;
  if (currentQ === questions.length) {
    quiz.innerHTML = '<h2>You have completed the quiz! Happy coding!</h2>';
  } else {
    showQ();
  }
}

showQ();
submit.addEventListener('click', checkAns);


function startQuiz() {
  startBtn.style.display = 'none';
  quiz.style.display = 'block';
}