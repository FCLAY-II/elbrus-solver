const route = require('express').Router();
const { Router } = require('express');
const { Task } = require('../db/models'); 
const { User } = require('../db/models');

route.get('/', (req, res) => {
  res.render('index')
})

route.get('/tasks/:categoryid/:taskid', async (req, res) => {
  try {
    let allTAsks = await Task.findAll()
    if(req.params.taskid<=allTAsks.length){
      let taska = await Task.findOne({ where: { id: req.params.taskid, category_id: req.params.categoryid}})
      res.render('tasks', {taska});
    } else{
    return res.redirect('/score')
    }
  } catch (error) {
    return res.redirect('/score')
  }
});

route.get('/score', async (req, res) => {
  let allScore = await User.findOne({ where: { id: req.session?.userId }})
  res.render('score', {allScore})
})

route.post("/tasks/:category/:taskid", async (req, res) => {
  try {
    const result = req.body.getValue;
    let full = await Task.findOne({ where: { id: req.params.taskid }})

    let args = full.args
    let normArgs = args.split(',').map((el) => +el)
    let func = new Function("return " + result)();
    let userAnswer = func.apply(null, normArgs);
    console.log(func.apply(null, normArgs), full.answer);
    if (full.answer == userAnswer) {
      console.log('проверка ответа', full.answer);
     
        await User.increment('score', { where: {id: req.session?.userId}});

    }
    res.sendStatus(200)


  } 
  catch (err) {
    res.sendStatus(500)
  }

});



module.exports = route;
