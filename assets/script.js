// VARIABLES

var timer = document.getElementById("timer");
var timeRemaining = document.getElementById("timeRemaining");
var timeIsOver = document.getElementById("timeIsOver");

var startContainer = document.getElementById("start");
var startQuizButton = document.getElementById("start-quiz-button");

var quizContainer = document.getElementById("quizContainer");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var correctChoiceCheck = document.getElementById("correctChoiceCheck");

var summary = document.getElementById("summary");
var submitInitialButton = document.getElementById("submitInitialButton");
var initialInput = document.getElementById("initialInput");
var mainContainer = document.getElementById("mainContainer");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackButton = document.getElementById("goBackButton");
var clearHighScoreButton = document.getElementById("clearHighScoreButton");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

var correctAnswers = 0;
var questionNumber = 0;
var scoreResult;
var questionArray = 0;
var totalTime = 100;

// QUESTIONS

var questions = [
  {
    question: "For arrays, the typeof operator in JavaScript will return... ",
    choices: ["(a) string", "(b) number", "(c) object", "(d) boolean"],
    answer: "(c) object",
  },
  {
    question: "JavaScript stores dates as ...",
    choices: [
      "(a) seconds",
      "(b) miliseconds",
      "(c) nanoseconds",
      "(d) minimiliseconds",
    ],
    answer: "(b) miliseconds",
  },
  {
    question: "Math.PI will return...",
    choices: ["(a) 3.14", "(b) 3.154", " (c) 3.314", "(d) 3.41"],
    answer: "(a) 3.14",
  },
  {
    question: "In JavaScript, a variable without a value has the value...",
    choices: ["(a) null", "(b) none", "(c) undefined", "(d) false"],
    answer: "(c) undefined",
  },
  {
    question: "What does JSON stand for?",
    choices: [
      "(a) JavaScript Object Norm",
      "(b) JavaScript Objective Notation",
      "(c) JavScript Order Notation",
      "(d) JavaScript Object Notation",
    ],
    answer: "(d) JavaScript Object Notation",
  },
  {
    question:
      "Which one of the following is NOT a way to declare a JS variable?",
    choices: ["(a) var", "(b) let", "(c) cont", "(d) const"],
    answer: "(c) cont",
  },
  {
    question: "Which one of the following is NOT a JS Keyword?",
    choices: ["(a) if", "(b) var", "(c) for", "(d) aim"],
    answer: "(d) aim",
  },

  {
    question:
      "When adding a number and a string, JS will treat the number as a(an)...?",
    choices: ["(a) string", "(b) number", "(c) object", "(d) boolean"],
    answer: "(a) string",
  },
];

// MAIN FUNCTION TO START THE QUIZ //

var startQuiz = function() {
  timeRemaining.textContent = totalTime;
  initialInput.textContent = "";

  startContainer.style.display = "none";
  quizContainer.style.display = "block";
  timer.style.display = "block";
  timeIsOver.style.display = "none";

  var startTimer = setInterval(function () {
    totalTime--;
    timeRemaining.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (questionArray < questions.length - 1) {
        gameOver();
      }
    }
  }, 1000);

  quizDisplay();
}

var quizDisplay = function() {
  nextQuestion();
}

var nextQuestion = function() {
  questionTitle.textContent = questions[questionArray].question;
  choiceA.textContent = questions[questionArray].choices[0];
  choiceB.textContent = questions[questionArray].choices[1];
  choiceC.textContent = questions[questionArray].choices[2];
  choiceD.textContent = questions[questionArray].choices[3];
}

// VERIFY THE ANSWER

var verifyAnswer = function(answer) {
  var lineBreak = document.querySelector("#lineBreak");
  lineBreak.style.display = "block";
  correctChoiceCheck.style.display = "block";

  if (
    questions[questionArray].answer === questions[questionArray].choices[answer]
  ) {
    correctAnswers++;
    correctChoiceCheck.textContent = "Correct!🥳";
  } else {
    totalTime -= 5;
    timeRemaining.textContent = totalTime;
    correctChoiceCheck.textContent = "Wrong!😕";
  }

  questionArray++;
  if (questionArray < questions.length) {
    nextQuestion();
  } else {
    gameOver();
  }
}

var chooseA = function() {
  verifyAnswer(0);
}

var chooseB = function() {
  verifyAnswer(1);
}

var chooseC = function() {
  verifyAnswer(2);
}

var chooseD = function() {
  verifyAnswer(3);
}

var gameOver = function() {
  summary.style.display = "block";
  quizContainer.style.display = "none";
  startContainer.style.display = "none";
  timer.style.display = "none";
  timeIsOver.style.display = "block";

  finalScore.textContent = correctAnswers;
}

//STORE HIGH SCORES

var storeHighScores = function(event) {
  event.preventDefault();

  if (initialInput.value === "") {
    alert("Please enter your initials!");
    return;
  }

  startContainer.style.display = "none";
  timer.style.display = "none";
  timeIsOver.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighScores);
  }

  var userScore = {
    initials: initialInput.value,
    score: finalScore.textContent,
  };

  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  showHighScores();
}

var showHighScores = function() {
  startContainer.style.display = "none";
  timer.style.display = "none";
  quizContainer.style.display = "none";
  timeIsOver.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  // KEEP THE SAVED SCORES IN LOCAL STORAGE

  var savedHighScores = localStorage.getItem("high scores");

  if (savedHighScores === null) {
    return;
  }

  var storedHighScores = JSON.parse(savedHighScores);

  for (var i = 0; i < storedHighScores.length; i++) {
    var eachNewHighScore = document.createElement("p");
    eachNewHighScore.innerHTML =
      storedHighScores[i].initials + ": " + storedHighScores[i].score;
    listOfHighScores.appendChild(eachNewHighScore);
  }
}

// EVENT LISTENERS

startQuizButton.addEventListener("click", startQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialButton.addEventListener("click", function (event) {
  storeHighScores(event);
});

viewHighScore.addEventListener("click", function (event) {
  showHighScores(event);
});

goBackButton.addEventListener("click", function () {
  startContainer.style.display = "block";
  highScoreSection.style.display = "none";
});

clearHighScoreButton.addEventListener("click", function () {
  window.localStorage.removeItem("high scores");
  listOfHighScores.innerHTML = "High Scores Cleared!";
  listOfHighScores.setAttribute(
    "style",
    "font-family: Azeret-mono, sans-serif"
  );
});
