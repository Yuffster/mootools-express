exports.listen = function(app,path) {
	app.get( (path || '/mootools.js'), function(req, res) {
		var moo = 'mootools.js';
		res.sendfile(moo);
	});
};