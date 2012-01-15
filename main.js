exports.listen = function(app,path) {
	app.get( (path || '/mootools.js'), function(req, res) {
		res.sendfile(__dirname+'/mootools.js');
	});
};