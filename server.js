var app = require('express')(),
	port = process.env.PORT || 8080,
	morgan = require('morgan');

// configure
app.use(morgan('dev'));

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
	res.send('I am the contact page');
});

// start the server
app.listen(port, function() {
	console.log('App listening on http://localhost:' + port);
});
