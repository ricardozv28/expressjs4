var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();

app.get('/', function(request, response) {
 response.sendFile(__dirname + '/home.html');
})
app.get('/courses', function(request, response) {
 fs.readFile('course.json', 'utf8', function(err, data) {
 var courses = JSON.parse(data).courses;
 response.locals = { courses: courses };
 response.render('courses.ejs');
 });
});
app.listen(8000);
console.log('Server running http://localhost:8000');
