const db = require('../models');


// show all route
exports.getTodos = (req, res)=> {
  db.Todo.find()
  .then((todos) => {
    res.json(todos);
  })
  .catch((err) => {
    res.send(err);
  });
};

// create route
exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
  .then((newTodo) => {
    // 201 is the status for created
    res.status(201).json(newTodo);
  })
  .then((err) => {
    res.send(err);
  });
};

// show id route
exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.todoId)
  .then((foundTodo) => {
    res.json(foundTodo);
  })
  .then((err) => {
    res.send(err);
  });
};

// update route
exports.updateTodo = (req, res) => {
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
};

// Delete route
exports.deleteTodo = (req, res) => {
  db.Todo.remove({_id: req.params.todoId})
  .then(() => {
    res.json({message: 'Deleted todo'});
  })
  .catch((err) => {
    res.send(err);
  });
};

module.exports = exports;