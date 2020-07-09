var express = require('express');
var sessionRouter = express.Router();

/* GET home page. */
sessionRouter.get('/session', function(req, res, next) {
res.send( '<h1> Welcome </h1>');

});

module.exports = sessionRouter;
