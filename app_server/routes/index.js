const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations.js');
const ctrlOthers = require('../controllers/others');
/* Locations pages */
router.get('/', ctrlLocations.Welcome);
router.get('/GameList', ctrlLocations.GameList);
router.get('/Register', ctrlLocations.Register);
router.get('/Login', ctrlLocations.Login);

/* Other pages */
router.get('/about', ctrlOthers.about);
module.exports = router;