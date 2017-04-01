var app = require('express')(),
	port = process.env.PORT || 8080,
	morgan = require('morgan'),
	bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));


// set routes
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

// about page
app.get('/about', function(req, res) {
	res.json({message:'I am the about page'});
});

// contact page
app.get('/contact', function(req, res) {
	res.sendFile(__dirname + '/contact.html');
});

app.post('/contact', function(req, res) {
	console.log(req.body);
	res.send('hello ' + req.body.name + '! Nice to meet you!');
});

// start the server
app.listen(port, function() {
	console.log('App listening on http://localhost:' + port);
});
