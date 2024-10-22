const mongoose = require('mongoose');
const dbURI = "mongodb+srv://wichabartosz2003:6jaeP!v36i9u@cluster0.ds6wg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

try {
mongoose.connect(
dbURI,
{ useNewUrlParser: true, useUnifiedTopology: true }).then(
() => {console.log(" Mongoose is connected")},
err=> {console.log(err)}
);
}
catch (e) {
console.log("could not connect");
}
require('./games.');

const reviewSchema = new mongoose.Schema({
    Author: {
        type: String,
        default: 'Anonymous'
    },
    Score: {
        type:Number,
        required: true,
        min:0,
        max: 100},
    Timestamp: {
        type: Date,
        'default': Date.now
    },
    ReviewText: {
        type: String,
        'default': "No review description was added by user" 
    }
});

const GameListSchema = new mongoose.Schema({
    Game: String ,
    Score: {
        type:Number,
        'default': null,
        min: 0,
        max: 100},
    Cost: {
        type: Number,
        'default': 0
    },
    Genres: [String],
    Review: [reviewSchema]
});

mongoose.model('GameReviews', GameListSchema);
