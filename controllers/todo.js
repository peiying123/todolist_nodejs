const todoModel = require('../models/todo');

const todoController = {
  getAll: (req, res) => {
    todoModel.getAll((err, results) => {
      if (err) return console.log(err);
      res.render('todo', {
        todos: results
      });
    });
  },
  get: (req, res) => {
    const id = req.params.id;
    todoModel.get(id, (err, results) => {
      if (err) return console.log(err);
      res.render('todo_id', {
        todo: results[0]
      });
    });
  },
  add: (req, res) => {
    const todo = req.body.todo;
    todoModel.add(todo, (err, results) => {
      if (err) return console.log(err);
    });
  },
  update: (req, res) => {
    const updatestatus = req.body;
    todoModel.update(updatestatus, (err, results) => {
      if (err) return console.log(err);
    });
  }
};

module.exports = todoController;
