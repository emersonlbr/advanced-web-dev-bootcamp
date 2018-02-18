const express = require('express'),
      router = express.Router();

const db = require('../models');

// all routes start with /api/todos
// using promises instead of callbacks

router.get('/', (req, res)=> {
  db.Todo.find()
  .then((todos) => {
    res.json(todos);
  })
  .catch((err) => {
    res.send(err);
  });
});

router.post('/', (req, res) => {
  db.Todo.create(req.body)
  .then((newTodo) => {
    // 201 is the status for created
    res.status(201).json(newTodo);
  })
  .then((err) => {
    res.send(err);
  });
});

module.exports = router;