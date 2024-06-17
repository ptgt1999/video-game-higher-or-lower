const router = require('express').Router();
//const User = require('../../models/User.js');
//const gameData = require("../../seeds/gameChoiceData.json");
const gameChoice = require('../../Models/GameChoice.js');


// GET a Game
router.get('/getGameData', async (req, res) => {
  console.log("test");
  //use gamechoice modal to get rows > convert rows into json > send json string as a response to the api call

  // don't read js file, get info from database
  try {
    const gameData = await gameChoice.findAll();
    console.log(gameData)
     if (!gameData) {
       res.status(404).json({ message: 'No user with this id!' });
       return;
    }
     res.status(200).json(gameData);
   } catch (err) {
     res.status(500).json({ message: 'Internal server error!' + err});
  }
});

// POST add a new game entry
router.post('/', async (req, res) => {
  try {
  console.log(req.body);
  var jsonPost = json.parse(req.body);
  gameChoice.create(`{ game: '${jsonPost.game}', score: '${jsonPost.score}'}`);
    res.status(204).end();
  } catch (err) {
    res.status(400).json(err);
  }
});

//
module.exports = router;
