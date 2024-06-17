const router = require('express').Router();
const path = require("path");

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/gameForm",function(req,res){
    res.sendFile(path.join(__dirname,"../form.html"));
});

module.exports = router;