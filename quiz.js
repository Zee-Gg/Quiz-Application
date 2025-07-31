const startBtn = document.getElementById('start-btn');
const retryBtn = document.getElementById('retry-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const scoreDisplay = document.getElementById('score');

let currentQuestionIndex = 0;
let score = 0;
const questions = [
  {
    question : "Who is the founder of Pakistan?",
    answers: [
      { text: "Allama Iqbal", correct: false },
      { text: "Molana Muhammad Ali Johar", correct: false },
      { text: "Quaid-e-Azam", correct: true },
      { text: "Liaqat Ali Khan", correct: false }
    ]
  },
  {
    question: "What is the sum of 50+50?",
    answers: [
      { text: "100", correct: true },
      { text: "50", correct: false },
      { text: "200", correct: false },
      { text: "10", correct: false }
    ]
  },
  {
    question: "NUST Institute of Information Technology is located in?",
    answers: [
      { text: "Peshawar", correct: false },
      { text: "Islamabad", correct: true},
      { text: "Lahore", correct: false },
      { text: "Karachi", correct: false }
    ]
  },
  {
    question: "CPU stands for?",
    answers: [
      { text: "Core Processing Unit", correct: false },
      { text: "Complete Processing Unit", correct: false},
      { text: "Central Processing Unit", correct: true },
      { text: "Comman Processing Unit", correct: false }
    ]
  },
];

startBtn.addEventListener('click', startQuiz);
retryBtn.addEventListener('click', startQuiz);

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  welcomeScreen.style.display = 'none';
  resultsScreen.style.display = 'none';
  quizScreen.style.display = 'block';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
  }
  if (questions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  quizScreen.style.display = 'none';
  resultsScreen.style.display = 'block';
  scoreDisplay.innerText = `${score} / ${questions.length}`;
}
