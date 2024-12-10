/* GET 'home' page */
const request = require('request');
const apiOptions = {server : 'https://t00223773-gamelibrary.onrender.com'};


const Welcome = function(req, res){
res.render('welcome', { 
    title: 'Welcome',
});
};

const Register = function(req, res){
    res.render('register', { 
        title: 'register',
});
};

const Login = function(req, res){
    res.render('login', { 
        title: 'login',
});
};

const _renderGameList = function(req, res, responseBody){
    res.render('gameList', { 
        title: 'Games List',
        pageHeader: { title: "isTitle"},
        games: responseBody
        });
}
const GameList = function(req, res){
    const requestOptions = {
        url : apiOptions.server + '/api/GameList',
        method : 'GET',
        json : {}
    };
    
    request(requestOptions, (err, response, body) => {
        if (err) {
        console.log(err);
        } else if (response.statusCode === 200) {
        console.log(body);
        } else {
        console.log(response.statusCode);
        }
        _renderGameList(req, res, body);
});
};

const _renderGameReviews = function(req, res, responseBody){
    res.render('gameReviews', { 
        title: 'Reviews',
        pageHeader: { title: "isTitle"},
        game: responseBody
        });
}

const GameReviews = function(req, res) {

    const requestOptions = {
        url : `${apiOptions.server}/api/GameList/${req.params.gameID}`,
        method : 'GET',
        json : {}
    };
    
    request(requestOptions, (err, response, body) => {
        if (err) {
        console.log(err);
        } else if (response.statusCode === 200) {
        console.log(body);
        } else {
        console.log(response.statusCode);
        }
        _renderGameReviews(req, res, body);
});
};

module.exports = {
    Welcome,
    GameList,
    Login,
    Register,
    GameReviews
};