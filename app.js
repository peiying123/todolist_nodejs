const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const todoController = require('./controllers/todo');

const app = express();
const port = 5001;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', todoController.getAll);
app.get('/todo/:id', todoController.get);
app.post('/memo', todoController.add);
app.post('/updateTodoStatus', todoController.update);
app.post('/deleteTodo', todoController.delete);
///deleteTodo
app.listen(port, () => {
  db.connect();
  console.log(`Example app listening at http://localhost:${port}`);
});
