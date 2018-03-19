const express = require('express'),
      bodyParser = require('body-parser');
      app = express();


const todoRoutes = require('./routes/todos');

// body parser conf
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// Default route
app.get('/', (req, res) => {
  // serving a static file
  res.sendFile('index.html');
});

// Using /api/todos on every route in todoRoutes
app.use('/api/todos', todoRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});