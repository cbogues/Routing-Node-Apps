var path = require('path');

module.exports = {
	showHome: showHome,
	showAbout: showAbout,
	showContact: showContact,
	processContact: processContact,
	showProfile: showProfile,
	show404: show404
};


// functions for routes
function showHome(req, res) {
	res.sendFile(path.join(__dirname, '../../index.html'));	
}

// about page
 function showAbout(req, res) {
	res.json({message:'I am the about page'});
}

// contact page
 function showContact(req, res) {
	res.sendFile(path.join(__dirname,'../../contact.html'));
}

 function processContact(req, res) {
	console.log(req.body);
	res.send('hello ' + req.body.name + '! Nice to meet you!');
}

//using params in routes
 function showProfile(req, res) {
	console.log(req.params);

	//grab user profile
	//grab the post based off of the post_slug
	res.send('You are reading ' + req.params.post_slug + ' by ' + req.params.username);
}

function show404(req, res, next) {
	res.status(404);
	res.sendFile(__dirname + '../../404.html');
}