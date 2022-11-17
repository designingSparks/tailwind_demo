const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  target = path.join(__dirname, '/public','/index.html');
  res.sendFile(target);
  console.log(target);
  // console.log(__dirname);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
