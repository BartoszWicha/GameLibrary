const express = require('express');
const router = express.Router();
const ctrlgames = require('../controllers/games.js');
const ctrlOthers = require('../controllers/others');
/* games pages */
router.get('/', ctrlgames.Welcome);
router.get('/GameList', ctrlgames.GameList);
router.get('/Register', ctrlgames.Register);
router.get('/Login', ctrlgames.Login);
router.get('/GameReviews/:Game', ctrlgames.GameReviews);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;

