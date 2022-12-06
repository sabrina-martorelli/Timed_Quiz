
//Targets the ol to append one new child per highscores to be shown
 var ol = document.getElementById('highscores');

 //Gets previous highscores from Local Storage 
 var existingHighscores = JSON.parse(localStorage.getItem('highscores'));

 for  (score in existingHighscores) {

  var li = document.createElement('li');
  li.innerText=  `${score.initials} - ${score.finalScore}`;
  ol.append(li)

 }
    