const express = require('express'),
      app = express();


app.get('/', (req, res) => {
  res.json({message: 'Hello world'});
});

app.listen(process.env.PORT || 5000, () => {
  console.log('App is running on port 5000');
});