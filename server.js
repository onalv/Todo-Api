var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
	res.json(todos);
});

app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	
	var matchedTodo = todos.find(function (todo) {
		return todo.id == todoId;
	});

	// todos.forEach(function (todo) {
	// 	if (todo.id === todoId) {
	// 		matchedTodo = todo;
	// 	}

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	}
	
});

app.post('/todos', function (req, res) {
	var body = req.body;
	
	console.log(todoNextId);

	body.id = todoNextId;
	todoNextId++;

	console.log(todoNextId);

	todos.push(body);

	console.log(todos);

	res.json(body);
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT);
});