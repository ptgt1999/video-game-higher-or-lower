function getGamesScore() {
  const requestUrl = 'http://localhost:3001/api/games';
  fetch(requestUrl)
  .then(function(response){
    return response.json();
  })
.then(function(data){
  const randomGame1=data[Math.floor(Math.random()* 15)]
  console.log("randomGame1", randomGame1.games)
  const randomGame2=data[Math.floor(Math.random()* 15)+15]
  console.log("randomGame2", randomGame2.games)
  current_elem.innerText = randomGame2.games +" VS "+ randomGame1.games;

  }
  )
}

// getGamesScore();



const current_elem = document.getElementById("current");
const btns = document.getElementsByClassName("btn");
const result_elem = document.getElementById("result");
const score_elem = document.getElementById("score");

let randomGame1 = 0;
let randomGame2 = getGamesScore();
let score = 0; 

// current_elem.innerText = randomGame2;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    PlayGame(this.dataset.value);
  })
}

function PlayGame (choice) {
  randomGame2 = randomGame1;
  randomGame1 = getGamesScore();
  current_elem.innerText = randomGame1;

  let comparison;

  if (randomGame2.score < randomGame1.score) {
    comparison = "higher";
  } else if (randomGame2.score > randomGame1.score) {
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

    setTimeout(function() {
      result_elem.classList.add("hide");
      result_elem.classList.remove("match");
    }, 750)
  } else if (comparison == "match") {
    result_elem.innerText = "Match";
    result_elem.classList.remove("hide");

    setTimeout(function() {
      result_elem.classList.add("hide");
    }, 750)
  } else {
    score = 0;
    score_elem.innerText = score;

    result_elem.innerText = "Incorrect";
    result_elem.classList.add("incorrect");
    result_elem.classList.remove("hide");

    setTimeout(function() {
      result_elem.classList.add("hide");
      result_elem.classList.remove("incorrect");
    }, 750)
  }

}

// function getRandomInt() {
//   return Math.floor(Math.random() * 20);
// }