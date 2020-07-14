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

/* CREATE TABLE images (imgname text, img bytea);
File file = new File("myimage.gif");
FileInputStream fis = new FileInputStream(file);
PreparedStatement ps = conn.prepareStatement("INSERT INTO images VALUES (?, ?)");
ps.setString(1, file.getName());
ps.setBinaryStream(2, fis, file.length());
ps.executeUpdate();
ps.close();
fis.close();

 */


//get all players on opponent page
opponentRouter.get('/opponent', function (request, response, next) {


  //const nextone = document.getElementById('thumbs-down');
  //const startgame = document.getElementsByClassName('thumbs-up');

  /*nextone.addEventListener('click', function(e) {
    console.log('thumbs-down button was clicked');
    //
  }, false);

  startgame.addEventListener('click', function(){
    console.log('thumbs-up button was clicked');
    //
  }, false);

   */

  if(request.session.candidates && request.session.candidates.length > 0 )  {
    const candidates = request.session.candidates;
    const candidate = candidates.pop();
    response.render('opponent', {candidate});

  } else{
    db.query('select * from player_table pt JOIN avatar_table at on pt.player_avatar_fk = at.avatar_pk where player_username is not NULL', (error, results) => {
      if (error) {
        throw error
      }
      const candidates = results.rows;
      request.session.candidates= candidates;
      const candidate = candidates.pop();
      response.render('opponent', candidate);
    });

  }

});

/*
//opponents array erstellen, wo alle gegner drin gespeichert sind
//...

//schauen ob session schon gestartet wurde, sonst starte neue session
if() {
};

//  array with name opponents nacheinander ausgeben.
for(let opponent of opponents)
{
  console.log(opponent);

*/



module.exports = opponentRouter;
