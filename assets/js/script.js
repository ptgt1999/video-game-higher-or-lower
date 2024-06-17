//setting global variables
var randomGame1; 
var randomGame2;
var Game1Score;
var Game2Score;
var game2Index;

//Setting Gamescore
function getGamesScore() {
  //TO DO: Create NEW API End Point that uses sequalize and returns JSON
  fetch("../../seeds/gameChoiceData.json")
  .then(function(response){
    console.log(response);
    return response.json();
  })
  
  //Setting random variables
.then(function(data){
  console.log(data)
  var game1Index = getRandomNumber(data.length);
  randomGame1=data[game1Index]; 
  //TO DO: Set Game 1 Image_Element= Random Game 1.Picture
  console.log("randomGame1", randomGame1.game)
  game2Index = getUniqueRandomNumber(data.length, game1Index )
  randomGame2=data[game2Index]
   //TO DO: Set Game 2 Image_Element= Random Game 2.Picture
  console.log("randomGame2", randomGame2.game);
  Game1Score = parseInt(randomGame1.score);
  Game2Score = parseInt(randomGame2.score);
  current_elem.innerText = randomGame1.game +" VS "+ randomGame2.game;

  }
  )
}
function getRandomNumber(length){
  return Math.floor(Math.random()*length)
}

function getUniqueRandomNumber(length, nonDuplicateNumber){
  var uniqueNumber = getRandomNumber(length);

  while(uniqueNumber == nonDuplicateNumber){
    uniqueNumber = getRandomNumber(length);
  }
  return uniqueNumber;
}


getGamesScore();


//TO DO: Get game 1 image source and game 2 image source
const current_elem = document.getElementById("current");
const btns = document.getElementsByClassName("btn");
const result_elem = document.getElementById("result");
const score_elem = document.getElementById("score");
const formBtn = document.getElementById("formBtn");

let score = 0; 

//Button to link to form
formBtn.addEventListener("click",fetchForm);

//Assigning play game funtion
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    PlayGame(this.dataset.value);
  })
}

//Run when either button is pressed
function PlayGame (choice) {

  let comparison;
  console.log(choice);
  console.log(Game1Score);
  console.log(Game2Score);
  console.log(Game1Score < Game2Score);
  console.log(Game1Score > Game2Score);

  if (Game1Score < Game2Score) {
    comparison = "higher";
  } else if (Game1Score > Game2Score) {
    comparison = "lower";
  } else {
    comparison = "match";
  }

  if (choice == comparison) {
    score++;
    score_elem.innerText = score;

    result_elem.innerText = "Correct";
    result_elem.classList.add("correct");
    result_elem.classList.remove("hide");
    shuffleGames();

  } else if (comparison == "match") {
    score++;
    score_elem.innerText = score;

    result_elem.innerText = "Correct";
    result_elem.classList.add("correct");
    result_elem.classList.remove("hide");
    shuffleGames();

  } else {
    score = 0;
    score_elem.innerText = score;

    result_elem.innerText = "Incorrect";
    result_elem.classList.add("incorrect");
    result_elem.classList.remove("hide");

    getGamesScore();
  }



}
//Shuflling Game 2 into Game 1 when correct 
function shuffleGames(){
  randomGame1 = randomGame2;
  Game1Score = Game2Score;
  //TO DO: Set Game 1 Image = Game 2 Image
  fetch("../seeds/gameChoiceData.json")
  .then(function(response){
    return response.json();


  })
  .then(function(data){
    console.log(data)
    var newGame2Index=getUniqueRandomNumber(data.length, game2Index)
    randomGame2=data[newGame2Index]
    game2Index=newGame2Index;
    Game2Score = parseInt(randomGame2.score);
    //TO DO: Set Game 2 Image to randomGame2.Picture
    current_elem.innerText = randomGame1.game+" VS " +randomGame2.game ;
    }
  )
}

//API to fetch form page
function fetchForm(){
  window.location.href=window.location.href+"gameform";
  console.log(window.location.href);
}
