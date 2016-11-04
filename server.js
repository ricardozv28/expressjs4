var express = require('express');
var app = express();


app.get('/', function(request, response) {
  response.sendFile(__dirname + '/home.html');
});

app.listen(8000);
console.log('Server running http://localhost:8000');
