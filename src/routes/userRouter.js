const route = require('express').Router();
const { User } = require('../db/models');

route.post('/signUp', async (req, res) => {
  const { firstname, lastname, email, phone, password: pass } = req.body;
  const saltRounds = 10;
  const password = await bcrypt.hash(pass, saltRounds);
  const currUser = await User.create({
    firstname,
    lastname,
    email,
    phone,
    password,
  });
  req.session.userId = currUser.id;
  req.session.firstname = currUser.firstname;
  res.redirect('/');
});

route.post('/signIn', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  if (!currUser || !(await bcrypt.compare(password, currUser?.password))) {
    // В идеале, нужно написать пользователю, что логин/пароль - неверен.
    return res.redirect('/');
  }
  req.session.UserID = currUser.id;
  req.session.firstname = currUser.firstname;
  res.redirect('/');
});

module.exports = route;
