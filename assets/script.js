// list variables here //
var quizContainer = document.getElementById("quizContainer");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var startContainer = document.getElementById("start");
var startQuizButton = document.getElementById("start-quiz-button");

var timer = document.getElementById("timer");
var timeRemaining = document.getElementById("timeRemaining");
var timeIsOver = document.getElementById("timeIsOver");






var totalTime = 100;


// questions in array format//

var quizQuestions = [
    {
    question: "For arrays, the typeof operator in JavaScript will return... ",
    choices:  ["(a) string", "(b) number", "(c) object", "(d) boolean"],
    correctAnswer: "(c)"
},
  {
    question: "JavaScript stores dates as ...",
    choices: ["(a) seconds", "(b) miliseconds", "(c) nanoseconds", "(d) minimiliseconds"],
    correctAnswer: "(b)"
},
   {
    question: "Math.PI will return...",
    choices: [ "(a) 3.14", "(b) 3.154", " (c) 3.314", "(d) 3.41"],
    correctAnswer: "(a)"
},
    {
    question: "In JavaScript, a variable without a value has the value...",
    choices: [ "(a) null", "(b) none", "(c) undefined", "(d) false"],
    correctAnswer: "(c)"
},
    {
    question: "What does JSON stand for?",
    choices: [ "(a) JavaScript Object Norm", "(b) JavaScript Objective Notation", 
    "(c) JavScript Order Notation", "(d) JavaScript Object Notation"],
    correctAnswer: "(d)"
},  
    {
    question: "Which one of the following is NOT a way to declare a JS variable?",
    choices: [ "(a) var", "(b) let", "(c) cont", "(d) const" ],
    correctAnswer: "(c)"
},
    {
    question: "Which one of the following is NOT a JS Keyword?",
    choices: ["(a) if", "(b) var", "(c) for", "(d) aim"],
    correctAnswer: "(d)"
},

    {
    question: "When adding a number and a string, JS will treat the number as a(an)...?",
    choices: [ "(a)string", "(b) number", "(c) object", "(d) boolean"],
    correctAnswer: "(a)"
},
     ];

// MAIN FUNCTION TO START THE QUIZ //

function startQuiz() {
    
    questionIndex = 0;
    totalTime = 100;
    timeRemaining.textContent = totalTime;
    initialInput.textContent = "";

    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    timer.style.display = "block";
    timeIsOver.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeRemaining.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

    quizDisplay();
    
};

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
};
