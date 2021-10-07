const express = require('express');
const path = require('path');
const hbs = require('hbs');
const session = require('express-session');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const redisClient = redis.createClient();

const app = express()

const PORT = 3000;




const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');

hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));

app.use(express.static(path.join(process.env.PWD, 'public')));

app.use(express.json()); // <- 'application/json'
app.use(express.urlencoded({ extended: true })); // <- 'application/x-www-form-urlencoded'

app.use(
  session({
    key: 'sid',
    secret: 'mysecret',
    store: new redisStore({
      host: 'localhost',
      port: 3000,
      client: redisClient,
    }),
    saveUninitialized: false,
    resave: false,
    httpOnly: true,
    cookie: { expires: 24 * 60 * 60e3 },
  })
);

app.use((req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.first_name = req.session?.first_name;
  next();
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log('Server has been started on port', PORT);
});
