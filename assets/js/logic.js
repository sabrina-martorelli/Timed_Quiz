//Variable to store current question index
var currentQuestionIndex = 0;
//Targets the timer to initialize
var initialtime = document.getElementById('time');
var time = 75;
//Inits Timer
var timer = setInterval(function () {

    initialtime.innerText = time;
    time--;
    //If the times reach 0 or there are no more questions the timer stops || (questions.length=currentQuestionIndex))
    if (time < 0) {

        //assign time to points before clear    
        StopTimer();

    }

}, 1000);


function penaltyIncorrectAnswer(){
    
    time= time-15;

}


//Stops timer
function StopTimer(){ 
    clearTimeout(timer);
    showScores();
  }



//Targets the start button
var startButton = document.getElementById('start');

//Add listener to start button
startButton.addEventListener('click', function (event) {

    //Targets the start-screen div and set class attribute to hide
    var startScreen = document.getElementById('start-screen');
    startScreen.classList.add('class', 'hide');

    //Targets the questions div and removes hide attribute
    var htmlQuestion = document.getElementById('questions');
    htmlQuestion.classList.remove('hide');

    //Calls functions to start Quiz
    runQuiz();


});








function runQuiz() {

    var currentTime = document.getElementById('time');


    if ((currentQuestionIndex < questions.length) && (currentTime.innerText > 0)) {
        showQuestions();            
        }    
    else {
        //Show Scores (end-screen) div 
        showScores();     
        //Stop the timer when all the questions are complete
        StopTimer();
        }
    }



function showQuestions() {

    var questionTitle = document.getElementById('question-title');
    var choices = document.getElementById('choices');
    var currentQuestion = questions[currentQuestionIndex];
    var currentChoices = currentQuestion.choices;

    //Clears the previous questions
    choices.innerHTML = '';
    //Set the title to the current question title
    questionTitle.innerText = currentQuestion.title
    //Create the choices for the current question
    for (var i = 0; i < currentChoices.length; i++) {
        var choiceText = currentChoices[i];
        //Button creation for each choice
        var button = document.createElement('button');
        button.innerText = choiceText;
        button.value = choiceText;
        choices.appendChild(button);
    }
   
    choices.addEventListener('click', checkAnswer);


}


function showFeedback(answerText) {
    var feedbackDiv = document.getElementById('feedback');
    feedbackDiv.classList.remove('hide');
    feedbackDiv.innerText = answerText;


    setTimeout(function () { feedbackDiv.classList.add('hide'); }, 500);

}


function checkAnswer(event) {

    var currentQuestion = questions[currentQuestionIndex];

    if (event.target.value == currentQuestion.answer) {

        //Targets the feedback div and removes hide attribute
        showFeedback('Correct');

    }
    else {
        //If the answer clicked was incorrect then 15 seconds  are subtracted from the clock
        penaltyIncorrectAnswer()
        showFeedback('Incorrect');

    };

    currentQuestionIndex++;
    //Delays the call of the function to show feedback properly
    setTimeout(function () {runQuiz();} , 500);
    
   
}

function showScores(){
    //Targets the questions div and adds hide attribute
    var questionDiv = document.getElementById('questions');
    questionDiv.classList.add('hide');
    
    //Targets the end-screen div and removes hide attribute
    var endScreenDiv = document.getElementById('end-screen');
    endScreenDiv.classList.remove('hide');
    
    //Assign actual time to Score
    var finalTime = document.getElementById('time');
    var finalScoreDiv = document.getElementById('final-score');
    finalScoreDiv.innerText = finalTime.innerText;
    }



////Targets the submit button
var submitButton = document.getElementById('submit');

//Object to store scores data
var scores ={
    initials:'',
    finalScore: 0,
};


//Add listener for the submit button

submitButton.addEventListener('click', function (event) {

    //Gets and store initials and final score from input
    scores.initials = document.getElementById('initials').value;
    scores.finalScore = document.getElementById('final-score').innerText;
   
    //convert object into a JSON string and store in local storage
    localStorage.setItem('score', JSON.stringify(scores));
    //Navigate to Highscores page 

    window.location.href = "highscores.html";

});