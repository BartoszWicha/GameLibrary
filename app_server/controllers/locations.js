/* GET 'home' page */
const Welcome = function(req, res){
res.render('welcome', { 
    title: 'Welcome',
});
};
/* GET 'Location info' page */
const GameList = function(req, res){
res.render('gameList', { 
    title: 'Games List',
    pageHeader: { title: "isTitle"},
    Reviews: [
        {
        Game:"Throne and Liberty",
        Score: "75",
        Cost: "20$",
        Genres: ["Action", "Adventure", "RPG", "Multiplayer"]
        },
        {
        Game:"Diablo 4",
        Score: "60",
        Cost: "30$",
        Genres: ["Action", "Adventure", "RPG", "Multiplayer"],
        } 
    ]
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

module.exports = {
    Welcome,
    GameList,
    Login,
    Register
};