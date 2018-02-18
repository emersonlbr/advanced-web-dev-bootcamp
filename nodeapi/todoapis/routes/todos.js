const express = require('express'),
      router = express.Router();

const db = require('../models');

// all routes start with /api/todos
// using promises instead of callbacks

// show all route
router.get('/', (req, res)=> {
  db.Todo.find()
  .then((todos) => {
    res.json(todos);
  })
  .catch((err) => {
    res.send(err);
  });
});

// create route
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


// show id route
router.get('/:todoId', (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo) => {
    res.json(foundTodo);
  })
  .then((err) => {
    res.send(err);
  });
});

// update route
router.put('/:todoId', (req, res) => {
  // req.body is what we are going to update
  // new true will give you the updated version
  // by default it returns the old version
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
  .then((todo) => {
    res.json(todo);
  })
  .catch((err) => {
    res.send(err);
  });
});

module.exports = router;