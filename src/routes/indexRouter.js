const route = require('express').Router();

route.get('/', (req, res) => {
  res.render('tasks');
});

route.post("/tasks/:id", (req, res) => {
  // console.log(req.body);
  const result = req.body.getValue;
  console.log(result);
  // var func = new Function("return " + result)();
  // console.log(func);
  // var fn = Function(`console.log((${result}))`);
  var func = new Function("return " + result)();
  console.log(func(50, 100));
  // const fun = Function(result)
  // console.log(fun(2,3));
});

module.exports = route;
