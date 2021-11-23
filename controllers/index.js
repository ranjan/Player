var Player = db.Player;

exports.getHomePage = (req, res) => {
    //let query = "SELECT * FROM `players` ORDER BY id ASC"; // query database to get all the players

      Player.findAll()
        .then(function (players) {
          console.log(players);
          res.render('index.ejs', {
                     title: "Welcome to Socka | View Players"
                     ,players: players
                 });
        });
    
}

