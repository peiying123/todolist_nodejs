const { update } = require('../controllers/todo');
const db = require('../db');

const todoModel = {
  getAll: (cb) => {
    db.query('SELECT * FROM todos_table', (err, results) => {
      if (err) return cb(err);
      cb(null, results);
    });
  },
  get: (id, cb) => {
    db.query('SELECT * FROM todos_table WHERE id = ?', [id], (err, results) => {
      if (err) return cb(err);
      cb(null, results);
    });
  },
  add: (todo, cb) => {
    db.query('INSERT INTO todos_table (content) VALUES (?)', [todo], (err, results) => {
      if (err) return cb(err);
      cb(null, results);
    });
  },
  update: (updatestatus, cb) => {
    
    let completedstatus = "未完成";
    if (updatestatus.isChecked==="true")
      completedstatus="完成";
    if (updatestatus.isChecked==="false")
      completedstatus="未完成";

    //console.log(updatestatus.todoId)
    //console.log(updatestatus.isChecked)
    //console.log(completedstatus)
    db.query('UPDATE todos_table SET complete = ? WHERE id = ?', [completedstatus, updatestatus.todoId], (err, results) => {
      if (err) return cb(err);
      cb(null, results);
    });
  }
};

module.exports = todoModel;
