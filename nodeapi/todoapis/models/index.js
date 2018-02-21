const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todo-api');
// mongoose.connect('mongodb://node-api:12345@ds241578.mlab.com:41578/node-api');

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');