/* GET 'home' page */
const Games = [
    {
    Name:"Throne and Liberty",
    Score: "75",
    Cost: "20$",
    Genres: ["Action", "Adventure", "RPG", "Multiplayer"],
    Reviews:[
        {
            Author: "John Doe",
            Score: 30,
            TimeStamp: new Date("2024-11-17T03:19:56.186Z"),
            ReviewText: "Could use more RPG Elements"
        },
        {
            Author: "Emily Brown",
            Score: 95,
            TimeStamp: new Date("2024-09-10T18:34:56.000Z"),
            ReviewText: "One of the best RPGs I've played this year!"
        },
        {
            Author: "Chris Evans",
            Score: 50,
            TimeStamp: new Date("2024-07-15T09:45:12.000Z"),
            ReviewText: "Mediocre experience. Needs more content and better balancing."
        }
    ]
    },


    {
    Name:"Diablo 4",
    Score: "60",
    Cost: "30$",
    Genres: ["Action", "Adventure", "RPG", "Multiplayer"],
    },


    {
    Name:"CS GO",
    Score: "50",
    Cost: "Free",
    Genres: ["Shooter", "Action", "Multiplayer"],
    } 
];

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
    Games: Games
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

const GameReviews = function(req, res) {
    const gameName = req.params.Game.replace(/-/g, ' '); // Convert URL hyphens to spaces
    const game = Games.find(g => g.Name.toLowerCase() === gameName.toLowerCase());

    
    if (game) {
        const hasReviews = game.Reviews && game.Reviews.length > 0;

        res.render('gamereviews', { 
            title: `Review of ${game.Game}`,
            Game: game,
            hasReviews : hasReviews
        });
    } else {
        res.status(404).send('Game not found');
    }
};

module.exports = {
    Welcome,
    GameList,
    Login,
    Register,
    GameReviews
};
