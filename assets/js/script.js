const current_elem = document.getElementById("current");
const btns = document.getElementsByClassName("btn");
const result_elem = document.getElementById("result");
const score_elem = document.getElementById("score");

let last_number = 0;
let current_number = getRandomInt();
let score = 0;

current_elem.innerText = current_number;

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    PlayGame(this.dataset.value);
  })
}

function PlayGame (choice) {
  last_number = current_number;
  current_number = getRandomInt();
  current_elem.innerText = current_number;

  let comparison;

  if (last_number < current_number) {
    comparison = "higher";
  } else if (last_number > current_number) {
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

function getRandomInt() {
  return Math.floor(Math.random() * 20);
}

// function generateRandom() {
//   var resultParagraph = document.getElementById("result");
//   var rand = Math.floor(Math.random()*20+1)
//   console.log(rand)
//   resultParagraph = rand
// }
// function higher() {

// }

// function lower() {

// }

// const express = require('express');
// const db = require('../db.js');

// const app = express();

// app.get('/', async (req, res) => {
//   try {
//     const result = await db.query('SELECT * FROM gamescores');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });
// const result = db.query('SELECT * FROM gamescores');
// test();
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// async function test(){
//     const result = await db.query('SELECT * FROM gamescores'); 
//     console.log(result.rows[0]);
// }

// import "tailwindcss/tailwind.css"

//process.env.PORT
//const PORT