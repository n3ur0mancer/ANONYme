/*opponentRouter.get('/opponent', function (httpRequest, httpResponse, next) {
  const id = httpRequest.params.id;

  const model = {};

  db
      .query(`select * from player_table where player_pk = ${id}`)
      .then(result => {
        if (result.rows.length < 1) {
          next();
        } else {
          model.player_table= result.rows[0];
          return db.query(`select * from avatar_table where player_avatar_fk = ${id}`);
        }
      })
      .then(result => {
        model.avatar_table = result.rows;
        httpResponse.render('opponents', model);
      })
      .catch(err => next(err));

});
 */

const express = require('express');
const db = require('../db/index');
const opponentRouter = express.Router();


//get all players
opponentRouter.get('/opponent', function (request, response) {
  db.query('select player_username, avatar_icon from player_table, avatar_table where player_username is not NULL', (error, results) => {
    if (error) {
      throw error
    }
    response.render('opponent', {player_table: result.rows});
  })
});


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



module.exports = opponentRouter ;
