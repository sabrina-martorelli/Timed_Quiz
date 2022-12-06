
//Targets the ol to append one new child per highscores to be shown
 var ol = document.getElementById('highscores');

 //Gets previous highscores from Local Storage 
 var existingHighscores = JSON.parse(localStorage.getItem('highscores'));

 //Sort array of objects to get high scores first
 existingHighscores.sort((a,b) => b.finalScore - a.finalScore);

 //Loops the array of highscores
 for  (score in existingHighscores) {
  
  //Creates an li element for each highscore
  var li = document.createElement('li');
  li.innerText=  `${existingHighscores[score].initials} - ${existingHighscores[score].finalScore}`;
  ol.append(li);

 }


