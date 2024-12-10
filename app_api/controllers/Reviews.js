const mongoose = require('mongoose');
const Games = mongoose.model('Games');

const LeaveReview = async function (req, res) {

    try{
        const gameID = req.params.gameID;
        const score = req.body.Score;
        const description = req.body.Description;
        
        if(!gameID){
            res.status(401).json({ message : "Game doesnt exist" });
            return;
        }

        if(!score || !description){
            res.status(401).json({ message : "Not all details have been enetered" });
            return;
        }

        const newReview = ({
            Author: "Anonymous",
            Score: score,
            ReviewText: description,
            Timestamp: new Date()
        });

        const game = await Games.findById(gameID);

        game.Review.push(newReview);
        await game.save();
        res.status(201).json({
            message: 'Review added successfully!',
            review: newReview,
            game: game
        });

    }
    catch{
        console.error('Error leaving review:');
        res.status(500).json({ message: 'An error occurred while leaving the review.' });
    }

};

module.exports = {
    LeaveReview
};