const mongoose = require('mongoose');
const Games = mongoose.model('Games');

const GamesListByRating = async function (req, res) {
    try{
        const games = await Games.find();

        if(!games){
            res.status(401).json({ "message" : "No Games exist in the database" });
            return;  
        }

        const sortedGames = games.sort((a, b) => b.Score - a.Score);
        res.status(200).json(sortedGames);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ "message": "Internal server error" });
    }
    
};

const GetSpecificGame = function (req, res) {

    if (req.params && req.params.gameID) {

        const id = new mongoose.Types.ObjectId(req.params.gameID);
        console.log(id);
        Games
            .findById(id)
            .then((game,err) => {
                if (!game) {
                    res
                        .status(404)
                        .json({
                        "message": "gameID not found"
                        });
                    return;
                } 
                else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(game);
        });
    } 
    else {
        res
        .status(404)
        .json({
        "message": "No gameID in request"
    });
    }
    };

module.exports = {
    GamesListByRating,
    GetSpecificGame
};