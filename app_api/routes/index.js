const express = require('express');
const router = express.Router();
const ctrlGames = require('../controllers/GameList');
const ctrlReviews = require('../controllers/Reviews');
const ctrlAccounts = require('../controllers/Accounts');

// Games routes
router.route('/GameList').get(ctrlGames.GamesListByRating);
router.route('/GameList/:gameID').get(ctrlGames.GetSpecificGame);

// Reviews routes
router.route('/GameList/:gameID/reviews').post(ctrlReviews.LeaveReview);

//Account routes
router.route('/Register').post(ctrlAccounts.Register)

module.exports = router;