
//Targets the start button
var startButton = document.getElementById('start');

//Add listener to start button
startButton.addEventListener('click', function(event){

//Targets the start-screen div and set class attribute to hide
var startScreen= document.getElementById('start-screen');
startScreen.classList.add('class', 'hide');

//Calls functions to start Timer and Quiz
startTimer();
startQuiz();

});


function startTimer() {

//Set initial time for timer
var initialtime = document.getElementById('time');
initialtime.innerText= 75;
   

    // var timer= setInterval(function(){
    
    //     document.body.innerText = time;
    
    //     time--;
    //     if (time < 0){
    
    //         clearTimeout(timer2);
    //     }
        
    //     } , 1000);



};

//Current question on screen
var currentQuestionIndex= 0;
var htmlQuestion=document.getElementById('questions');
htmlQuestion.classList.remove('hide');

var questionTitle=document.getElementById('question-title');
var choices = document.getElementById('choices');

function startQuiz(){

var currentQuestion = questions[currentQuestionIndex];
var currentChoices = currentQuestion.choices;

//Set the title to the current question title
questionTitle.innerText= currentQuestion.title;



 for (var i = 0; i< currentChoices.length;  i++ ) {
   
  var choiceText = currentChoices[i];
  var button = document.createElement('button');
  button.innerText=choiceText;
  button.value=choiceText;
  choices.appendChild (button);



 }


};
