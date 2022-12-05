
//Targets the start button
var startButton = document.getElementById('start');

//Add listener to start button
startButton.addEventListener('click', function(event){

//Targets the start-screen div and set class attribute to hide
var startScreen= document.getElementById('start-screen');
startScreen.classList.add('class', 'hide');

//Targets the questions div and removes hide attribute
var htmlQuestion=document.getElementById('questions');
htmlQuestion.classList.remove('hide');

//Calls functions to start Timer and Quiz
runQuiz();
startTimer();
});


function startTimer() {

//Set initial time for timer
var initialtime = document.getElementById('time');
var time= 75;
   
var timer= setInterval(function(){
    
    initialtime.innerText= time;
    time--;
    //If the times reach 0 or there are no more questions the timer stops || (questions.length=currentQuestionIndex))
    if (time < 0)  {
        
        //assign time to points before clear    
        clearTimeout(timer);
            


       }
        
      } , 1000);



};


var currentQuestionIndex=0;






function runQuiz(){

var questionTitle=document.getElementById('question-title');
var choices = document.getElementById('choices');
var currentQuestion = questions[currentQuestionIndex];
var currentChoices = currentQuestion.choices;

//Clears the previous questions
choices.innerHTML='';
//Set the title to the current question title
questionTitle.innerText= currentQuestion.title
//Create the choices for the current question
 for (var i = 0; i< currentChoices.length;  i++ ) { 
  var choiceText = currentChoices[i];
  //Button creation for each choice
  var button = document.createElement('button');
  button.innerText=choiceText;
  button.value=choiceText;
  choices.appendChild (button);
 }

 choices.addEventListener('click',checkAnswer);
 

}


function showFeedback(answerText){
    var feedbackDiv=document.getElementById('feedback');
    feedbackDiv.classList.remove('hide');
    feedbackDiv.innerText= answerText;   

    setTimeout(function(){ feedbackDiv.classList.add('hide'); }, 1000);

}


function checkAnswer(event){

var currentQuestion = questions[currentQuestionIndex]; 
    if (event.target.value == currentQuestion.answer){

    console.log('correct');
    //Targets the feedback div and removes hide attribute
    showFeedback('Correct------------');


   }
   else{
   
    console.log('Incorrect');
    showFeedback('Incorrect------------');

   };
    
 currentQuestionIndex++;
 console.log(currentQuestionIndex);

if (currentQuestionIndex < 5){
    runQuiz();
    }
else {

//Targets the questions div and adds hide attribute
var questionDiv=document.getElementById('questions');
questionDiv.classList.add('hide');

//Targets the end-screen div and removes hide attribute
var endScreenDiv=document.getElementById('end-screen');
endScreenDiv.classList.remove('hide');

//Assign actual time to Score
var finalTime = document.getElementById('time');
var finalScoreDiv=document.getElementById('final-score');
finalScoreDiv.innerText=finalTime.innerText;
//needs to stop the timer here

}
  }

