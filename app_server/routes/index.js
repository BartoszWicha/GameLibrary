const express = require('express');
const router = express.Router();
const ctrlgames = require('../controllers/games.js');
const ctrlOthers = require('../controllers/others');
const passport = require('passport');
/* games pages */

router.get('/', ctrlgames.Welcome);
router.get('/GameList', ctrlgames.GameList);
router.get('/Register', ctrlgames.Register);
router.get('/Login', ctrlgames.Login);
router.get('/GameList/:gameID', ctrlgames.GameReviews);

router.post('/Login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: 'Login',
  }));

router.get('/Logout', (req, res) => {
    req.logout((err) => {
      if (err) {
        console.error('Logout error:', err);
        return res.status(500).send('Error during logout.');
      }
      res.redirect('/');
    });
  });
module.exports = router;

