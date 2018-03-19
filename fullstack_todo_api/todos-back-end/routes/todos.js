const express = require('express'),
      router = express.Router();

const db = require('../models'),
      helpers = require('../helpers/todo');

// all routes start with /api/todos
// using promises instead of callbacks

// router.get('/', );
// router.post('/', );
// combines the two routes '/'
// the code routes are in the helpers folder
// Index and Create routes
router.route('/')
  .get(helpers.getTodos)
  .post(helpers.createTodo);

// Get, Update and Delete routes
router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);
// the code above is short for this bellow
// router.get('/:todoId', );
// router.put('/:todoId', )
// router.delete('/:todoId', );

module.exports = router;