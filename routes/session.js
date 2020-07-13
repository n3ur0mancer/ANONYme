/* var express = require('express');
var sessionRouter = express.Router();

sessionRouter.get('/session', function(req, res, next) {
res.send( '<h1> Welcome </h1>');

});

module.exports = sessionRouter;

/*


/* //get 1 player?
  opponentRouter.get('/id', function (request, response) {
  const id = parseInt(request.params.id)

  db.query('SELECT * FROM player_table WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.render('id', {player_table: result.rows});
  })
};
*/