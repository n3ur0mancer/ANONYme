const express = require('express');
const db = require('../db/index');

const gameRouter = express.Router();

gameRouter.get('/game', function(req, res, next) {
    res.render('game');
});

module.exports = gameRouter;
