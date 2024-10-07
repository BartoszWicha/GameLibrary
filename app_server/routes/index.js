const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations.js');
const ctrlOthers = require('../controllers/others')
/* Locations pages */
router.get('/', ctrlLocations.Welcome);
router.get('/GameList', ctrlLocations.GameList);
/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;