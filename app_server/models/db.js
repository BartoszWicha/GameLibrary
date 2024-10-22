const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
      await mongoose.connect(dbURI); // No need for useNewUrlParser or useUnifiedTopology
      console.log("Mongoose is connected");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  };
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