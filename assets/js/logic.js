//Variable to store current question index
var currentQuestionIndex = 0;
//Set initial time for timer
var time = 75;

//Definition of array of objects to store scores data
var highscores = [{
    initials: '',
    finalScore: 0,
}];

//Definition object to store scores data
var score = {
    initials: '',
    finalScore: 0,
}


//Function to start and run timer
function startTimer() {
    //Targets timer 
    var clock = document.getElementById('time');
    //Inits Timer
    var timer = setInterval(function () {

        if (time > -1) {
            clock.innerText = time;
            time--;
        }
        else {
            //If the times reach 0 the timer will stop
            stopTimer();   
        }

    }, 1000);
}

//Function to set a penalty for a wrong answer. The timer will be decremented 20 second
function penaltyIncorrectAnswer() {
    time = time - 20;
}


//Function to stops timer and show scores
function stopTimer() {
    clearTimeout(1);
    showScores();
}



//Targets the start button
var startButton = document.getElementById('start');

//Add listener to start button
startButton.addEventListener('click', function (event) {

    //Targets the start-screen div and adds class hide
    var startScreen = document.getElementById('start-screen');
    startScreen.classList.add('class', 'hide');

    //Targets the questions div and removes hide class
    var htmlQuestion = document.getElementById('questions');
    htmlQuestion.classList.remove('hide');

    //Calls functions to start Timer and Quiz
    startTimer();
    //Delays the call to give time to the timer to start with correct initial value
    setTimeout(function () { runQuiz(); }, 1000);


});


//Function to run quiz and stop it when there is no more questions or the time is over
function runQuiz() {

    //Targets the timer to check the current time
    var currentTime = document.getElementById('time');

    //If there are question to show or the time is not over, shows the next question
    if ((currentQuestionIndex < questions.length) && (currentTime.innerText > 0)) {
        showQuestion();
    }
    else {
        
        //Stop the timer
        stopTimer();
      
    }
}


//Function to show a question with all the options
function showQuestion() {

    //Targets the element h1 that contains the question title
    var questionTitle = document.getElementById('question-title');

    //Targets the div choices to appends question choices  
    var choices = document.getElementById('choices');
    
    //Clears the previous question on screen
    choices.innerHTML = '';
    
    //Gets one question from array 
    var currentQuestion = questions[currentQuestionIndex];
   
    //Gets choices of current question
    var currentChoices = currentQuestion.choices;

    //Set the title on screen with the current question title
    questionTitle.innerText = currentQuestion.title

    //Create the choices for the current question
    for (var i = 0; i < currentChoices.length; i++) {
       
        var choiceText = currentChoices[i];
        //Creates a button for each choice
        var button = document.createElement('button');
        button.innerText = choiceText;
        button.value = choiceText;
        //Append each child button to the div choices
        choices.appendChild(button);
    }

    //Adds a listener for each choice using event delegation.
    //When a choices button is click the function is called
    choices.addEventListener('click', checkAnswer);


}


//Function to compare the target value with the correct answer for the question
function checkAnswer(event) {

    //Gets the correct answer for the current question
    var rightQuestion = questions[currentQuestionIndex].answer;

    if (event.target.value == rightQuestion) {

        //Call the function for correct answer
        showFeedback('Correct');

    }
    else {
        //If the answer clicked was incorrect then 20 seconds  are subtracted from the clock
        penaltyIncorrectAnswer()
        //Call the function for Incorrect answer
        showFeedback('Incorrect');

    };

    //Increments the variable to get the next question
    currentQuestionIndex++;

    //Delays the call of the function that will show the next question to show feedback properly
    setTimeout(function () { runQuiz(); }, 500);


}


 //Function to show feedback on screen 
function showFeedback(answerText) {

    //Targets the feedback div and removes the hide class
    var feedbackDiv = document.getElementById('feedback');
    feedbackDiv.classList.remove('hide');
   
    //Shows feedback on screen
    feedbackDiv.innerText = answerText;
    //Show the feedback only for some time on screen
    setTimeout(function () { feedbackDiv.classList.add('hide'); }, 500);

}

//Function to show final score after quiz is finish
function showScores() {
    //Targets the questions div and adds hide attribute to it
    var questionDiv = document.getElementById('questions');
    questionDiv.classList.add('hide');

    //Targets the end-screen div and removes hide attribute from it
    var endScreenDiv = document.getElementById('end-screen');
    endScreenDiv.classList.remove('hide');

    //Targets timer and final score div
    var finalTime = document.getElementById('time');
    var finalScoreDiv = document.getElementById('final-score');

    //Assign time on timer as final score
    //If the timer is less than 0 the score will be mark as 0
    if (finalTime.innerText < 0) {
        finalScoreDiv.innerText = 0;
    }
    else {
        finalScoreDiv.innerText = finalTime.innerText;
    }
}


//Targets the submit button
var submitButton = document.getElementById('submit');

//Add listener for the submit button
submitButton.addEventListener('click', function (event) {

    //Gets and store initials and final score from input
    var initials = document.getElementById('initials').value;
    var finalScore = document.getElementById('final-score').innerText;

    //Gets previous highscores from Local Storage if any
    var existingHighscores = JSON.parse(localStorage.getItem('highscores'));

    //If there are highscores on local storage, adds one more
    if (existingHighscores) {
        //Sets new object to be push
        score.initials = initials;
        score.finalScore = finalScore;
        //Adds new score to Array of highscores
        existingHighscores.push(score);

        //Convert object into a JSON string and store in local storage
        localStorage.setItem('highscores', JSON.stringify(existingHighscores));

    }
    else { //If there is no highscores on local storage, adds the first one
        //Sets new array and object
        highscores[0].initials = initials;
        highscores[0].finalScore = finalScore;

        //Convert object into a JSON string and store in local storage
        localStorage.setItem('highscores', JSON.stringify(highscores));

    }

    //Automatically navigates to highscores.html page 
    window.location.href = "highscores.html";

});