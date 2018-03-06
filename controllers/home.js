const User = require('../models/User');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  const API_URI = req.protocol + '://' + req.get('host') + '/api';
  User.find((err, users) => {
    res.render('home', { users, apiUri: API_URI });
  });
};

