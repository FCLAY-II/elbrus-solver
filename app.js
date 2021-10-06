const express = require('express');
const path = require('path');
const hbs = require('hbs');

const PORT = 3000;

const app = express();

const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');

hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(express.json()); // <- 'application/json'
app.use(express.urlencoded({ extended: true })); // <- 'application/x-www-form-urlencoded'

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log('Server has been started on port', PORT);
});
