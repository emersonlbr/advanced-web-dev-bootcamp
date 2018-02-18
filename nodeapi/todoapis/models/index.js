const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://locallhost/todo-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');