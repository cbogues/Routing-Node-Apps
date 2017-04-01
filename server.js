var app = require('express')(),
	port = process.env.PORT || 8080,
	morgan = require('morgan'),
	bodyParser = require('body-parser');

// configure
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// set routes
// var router = require('./app/routes');
// app.use(router);
			
			// simplfied from above
app.use(require('./app/routes'));

// start the server
app.listen(port, function() {
	console.log('App listening on http://localhost:' + port);
});
