const router = require('express').Router();

const apiRoutes = require('./HigherLowerRoutes.js');

router.use('/gamedata', apiRoutes);

module.exports = router;
