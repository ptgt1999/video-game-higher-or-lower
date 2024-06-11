const router = require('express').Router();

const apiRoutes = require('./HigherLowerRoutes.js');

router.use('/games', apiRoutes);

module.exports = router;
