var timerEl = document.getElementById("timer");
var quizBoxEl = document.getElementById("quizBox");
var questionsEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var gameOverEL = document.getElementById("game-Over");
var finalScoreEl = document.getElementById("finalScore");
var submitScoreEl = document.getElementById("submitScore");
var initialsEl = document.getElementById("initials");
var checkerEl = document.getElementById("checker");
var startBtn = document.getElementById("start");

var time = questions.length * 15;
var currentQuestionIndex = 0;
var timerId;




function start(){
    var startScreenEl = document.getElementById("startPage")
    startScreenEl.setAttribute("class", "hide")

    questionsEl.removeAttribute("class");    

    timerid = setInterval(countdown, 1000);

    timerEl.textContent = time;
    
    getNewQuestion()

}


function getNewQuestion(){

    var currentQuestion = questions[currentQuestionIndex];

    questionsEl.textContent = currentQuestion.question;
    
    answersEl.innerHTML = "";

    currentQuestion.answers.forEach(function(answer, i){

        var answerNode = document.createElement("button");
        answerNode.setAttribute("class", "answer");
        answerNode.setAttribute("value", answers);

        answerNode.textContent = i + 1 + ". " + answers;

        answerNode.onclick = questionCheck();

        answersEl.appendChild(answerNode);
    });
}


function questionCheck(){

    if (this.value !== questions[currentQuestionIndex].correctAnswer){
        time -=15;
        if (time < 0){
            time = 0;
        }

 

    checkerEl.textContent = "Incorrect" ;   
    } else{

    checkerEl.textContent = "Correct" ;   

    }

    checkerEl.setAttribute("class", "checker");
    setTimeout(function(){
        checkerEl.setAttribute("class", "checker hidden");
    }, 1000);

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length){
        endQuiz();
    } else{
        getNewQuestion();
    }
}

function endQuiz(){

    clearInterval(timerId);

    gameOverEL.removeAttribute("class");

    finalScoreEl.removeAttribute("class");

    questionsEl.setAttribute("class", "hide");

}

function countdown(){

    time--;
    timerEl.textContent = time;

    if(time <= 0){
        endQuiz();
    }
}

startBtn.onclick = start;
