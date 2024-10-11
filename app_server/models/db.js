const mongoose = require('mongoose');
const dbURI = "mongodb+srv://wichabartosz:6jaeP!v36i9u@cluster0.in0dz.mongodb.net/GameLibrary?retryWrites=true&w=majority";


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
require('./GameList');

const GameListSchema = new mongoose.schema({
    Game: String ,
    Score: {
        type:Number,
        'default': null,
        min: 0,
        max: 100},
    Cost: {
        type: Number,
        'default': 0,},
    Genres: [String],
    Review: [reviewSchema]
})

mongoose.model('GameReviews', GameListSchema);

const reviewSchema = new mongoose.schema({
    Author: {
        type: String,
        default: 'Anonymouse'
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
})
