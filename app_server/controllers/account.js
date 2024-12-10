exports.logout = (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    res.redirect('/');
  });
};

exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/Login');
};