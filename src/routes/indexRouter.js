const route = require('express').Router();
const { Router } = require('express');
const { Task } = require('../db/models');
const { User } = require('../db/models');

route.get('/', (req, res) => {
  res.render('index');
});

route.get("/tasks/:categoryid/:taskid", async (req, res) => {
  try {
    let allTAsks = await Task.findAll({
      attributes: ['id'],
      where: { category_id: req.params.categoryid },
      raw: true,
    });
    let idEach = allTAsks.map((el)=>el.id)
    // let ids = Object.keys(allTAsks);
    if (idEach.includes(+req.params.taskid)) {
      let taska = await Task.findOne({
        where: { id: req.params.taskid, category_id: req.params.categoryid },
      });
      console.log(taska);
      res.render('tasks', { taska });
    } else {
      return res.redirect('/score');
    }
  } catch (error) {
    return res.redirect('/score');
  }
});

route.get('/score', async (req, res) => {
  let allScore = await User.findOne({ where: { id: req.session?.userId } });
  res.render('score', { allScore });
});

route.post('/tasks/:category/:taskid', async (req, res) => {
  try {
    const result = req.body.getValue;
    let full = await Task.findOne({ where: { id: req.params.taskid } });
    let args = full.args;
    let normArgs = args.split(',').map((el) => +el);
    let func = new Function('return ' + result)();
    let userAnswer = func.apply(null, normArgs);
    if (full.answer == userAnswer) {
      await User.increment('score', { where: { id: req.session?.userId } });
    }
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = route;
