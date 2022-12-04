
//Targets the start button
var startButton = document.getElementById('start');

//Add listener to start button
startButton.addEventListener('click', function(event){

//Targets the start-screen div and set class attribute to hide
var startScreen= document.getElementById('start-screen');
startScreen.setAttribute('class', 'start hide');

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



}

