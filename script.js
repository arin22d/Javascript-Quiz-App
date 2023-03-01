const quizData = [
  {
    question: "Which country has the highest life expectancy?",
    a: "Japan",
    b: "South Korea",
    c: "Hong Kong",
    d: "Denmark",
    correct: "c",
  },
  {
    question: "What disease commonly spread on pirate ships?",
    a: "Scurvy",
    b: "Dysentery",
    c: "Diphtheria",
    d: "Pneumonia",
    correct: "a",
  },
  {
    question: "What artist has the most streams on Spotify?",
    a: "Ed Sheeran",
    b: "Drake",
    c: "Eminem",
    d: "Taylor Swift",
    correct: "b",
  },
  {
    question:
      "Queen guitarist Brian May is also an expert in what scientific field?",
    a: "Cosmology",
    b: "Astrobiology",
    c: "Astrostatistics",
    d: "Astrophysics",
    correct: "d",
  },
  {
    question:
      "Which Indian telecom company has rolled out world's first satellite-based narrowband-IoT network?",
    a: "Jio Networks",
    b: "Vi",
    c: "BSNL",
    d: "Airtel",
    correct: "c",
  },
  {
    question:
      "In which country a new species of fish named 'Schizothorax sikusirumensisa' has been discovered?",
    a: "India",
    b: "Australia",
    c: "Russia",
    d: "Brazil",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
