const route = require('express').Router();
const { Task } = require('../db/models') 

route.get('/tasks/:id/:id', async (req, res) => {
  let taska = await Task.findOne({ where: { id: req.params.id }})
  console.log(taska);
  res.render('tasks', {taska});
});

route.post("/tasks/:category/:task", async (req, res) => {

  const result = req.body.getValue;
  console.log({arguments});

  let full = await Task.findOne({ where: { id: req.params.task }})
  let args = full.args
  let normArgs = args.split(',').map((el) => +el)
  console.log(normArgs);

  let func = new Function("return " + result)();
  console.log(func.apply(null, normArgs));

});


module.exports = route;
