/* GET 'home' page */
const Welcome = function(req, res){
res.render('welcome', { title: 'Home' });
};
/* GET 'Location info' page */
const GameList = function(req, res){
res.render('gameList', { title: 'Games List' });
};

module.exports = {
    Welcome,
    GameList,
};