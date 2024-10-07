/* GET 'home' page */
const Welcome = function(req, res){
res.render('index', { title: 'Home' });
};
/* GET 'Location info' page */
const GameList = function(req, res){
res.render('index', { title: 'Games List' });
};

module.exports = {
    Welcome,
    GameList,
};