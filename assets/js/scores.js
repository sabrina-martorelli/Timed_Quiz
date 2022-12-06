//Targets the submit button
var submitButton = document.getElementById('submit');

//Object to store scores data
var scores ={
    initials:'',
    finalScore: 0,
};


//Add listener for the submit button

submitButton.addEventListener('click', function (event) {

    //Gets and store initials and final score from input
    scores.initials = document.getElementById('initials');
    scores.finalScore = document.getElementById('final-score');

    //convert object into a JSON string and store in local storage
    localStorage.setItem('score', JSON.stringify(scores));
   
    //Navigate to Highscores page 

    //window.location.href = "highscores.html";

});

