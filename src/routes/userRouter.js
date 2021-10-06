const route = require('express').Router();

route.get('/signin', (req, res) => {
  res.render('login');
});

module.exports = route;
