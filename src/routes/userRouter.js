const route = require('express').Router();
const { User } = require('../db/models');
const bcrypt = require('bcrypt');

route.post('/signUp', async (req, res) => {
  console.log(req.body);
  const {
    first_name,
    last_name,
    email,
    phone_number,
    password: pass,
  } = req.body;
  const saltRounds = 10;
  const password = await bcrypt.hash(pass, saltRounds);
  const currUser = await User.create({
    first_name,
    last_name,
    email,
    phone_number,
    password,
  });
  req.session.userId = currUser.id;
  req.session.first_name = currUser.first_name;
  res.redirect('/user/solve');
});

route.post('/signIn', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  if (!currUser || !(await bcrypt.compare(password, currUser?.password))) {
    // В идеале, нужно написать пользователю, что логин/пароль - неверен.
    return res.redirect('/');
  }
  req.session.UserID = currUser.id;
  req.session.first_name = currUser.first_name;
  res.redirect('/user/solve');
});

route.get('/solve', (req, res) => {
  res.render('solve');
});

route.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid');
  res.redirect('/');
});

module.exports = route;
