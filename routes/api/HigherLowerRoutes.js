const router = require('express').Router();
const User = require('../../models/User.js');
const gameData = require("../../seeds/gameChoiceData.json");

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

// POST add a new game entry
router.post('/', async (req, res) => {
  try {
  console.log(req.body);
    res.status(204).end();
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
