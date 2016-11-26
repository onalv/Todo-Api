var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'Finish course',
	completed: false
}, {
	id: 2,
	description: 'Hacer las compras',
	completed: false
}, {
	id: 3,
	description: 'Pagat tarjeta',
	completed: true
}];


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

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT);
});