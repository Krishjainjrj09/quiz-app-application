const quizData = [
  {
    question: "What is the capital of France?",
    options: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" },
    correct: "c"
  },
  {
    question: "Which is the smallest prime number?",
    options: { a: "1", b: "2", c: "3", d: "0" },
    correct: "b"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: { a: "Earth", b: "Venus", c: "Mars", d: "Jupiter" },
    correct: "c"
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const resultEl = document.getElementById("result");
  resultEl.classList.add("hidden");

  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    const option = btn.getAttribute("data-option");
    btn.textContent = `${option.toUpperCase()}: ${current.options[option]}`;
    btn.className = "answer-btn";
    btn.disabled = false;
  });
}

function selectAnswer(option) {
  selectedAnswer = option;
  const correct = quizData[currentQuestion].correct;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    const btnOption = btn.getAttribute("data-option");
    if (btnOption === correct) {
      btn.classList.add("correct");
    } else if (btnOption === option) {
      btn.classList.add("wrong");
    }
  });

  if (selectedAnswer === correct) {
    score++;
  }
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").textContent = "Quiz Completed!";
  document.querySelector("ul").classList.add("hidden");
  document.getElementById("next-btn").classList.add("hidden");
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${quizData.length}!`;
  result.classList.remove("hidden");
}

window.onload = loadQuestion;
