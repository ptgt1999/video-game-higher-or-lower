const router = require('express').Router();
const User = require('../../Models/User.js');
//const gameData = require("../../seeds/gamedata.js");

// GET a Game
router.get('/', async (req, res) => {
  res.json(gameData);
  // don't read js file, get info from database
  return;
  try {
    const userData = await User.findAll();
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error!' });
  }
});

// POST create a new game
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      games: req.body.games,
      score: req.body.score, 
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// // UPDATE a Game
// router.put('/:id', async (req, res) => {
//   try {
//     const userData = await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!userData[0]) {
//       res.status(404).json({ message: 'No user with this id!' });
//       return;
//     }
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(500).json({ message: 'Internal server error!' });
//   }
// });

module.exports = router;
