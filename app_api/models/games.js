const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    Author: {
        type: String,
        default: 'Anonymous'
    },
    Score: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    Timestamp: {
        type: Date,
        default: Date.now
    },
    ReviewText: {
        type: String,
        default: "No review description was added by user"
    }
},{ versionKey: false });

const GameListSchema = new mongoose.Schema({
    Game: String,
    Score: {
        type: Number,
        default: null,
        min: 0,
        max: 100
    },
    Cost: {
        type: Number,
        default: 0
    },
    Genres: [String],
    Review: [reviewSchema]
},{ versionKey: false });

mongoose.model('Games', GameListSchema, 'Games');