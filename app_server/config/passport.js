const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('../../app_api/models/accounts');
const User = mongoose.model('Accounts');

passport.use(new LocalStrategy(
  { usernameField: 'Email', passwordField: 'Password' },
  async (Email, Password, done) => {
    try {
      const user = await User.findOne({ Email });
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (Password !== user.Password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
