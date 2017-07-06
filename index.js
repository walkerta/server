var express = require('express')
var app = express();
var todos = [];

app.get('/', function (req, res) {
  res.json(todo)
});


app.post('/todo', function (req, res) {
  res.json(todo)
});

app.get ('/todo/:id'), function (req, res){
  res.json (todo)

});

app.put ('todo/:id'), function (req, res){
  res.json(todo)
});


app.patch ('todo/:id'), function (res, res){
  res.json(todo)
});

app.delete('/todo/', function (req, res) {
  res.json('todo');
});


app.listen(3000)var express = require('express')
