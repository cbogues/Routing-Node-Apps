module.exports = {
	showDashboard: showDashboard
};


function showDashboard(req, res) {
	res.send('I am the dashboard');
}