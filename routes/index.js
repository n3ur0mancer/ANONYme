var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/victim', function(req, res, next) {
  res.render('victim', { title: 'Wähle dein Opfer' });
});
router.get('/game', function (req,res, ) {
  res.render('game');
});

module.exports = router;
