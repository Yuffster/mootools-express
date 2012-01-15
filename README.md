mootools-express
--------------------------

A handy way of putting MooTools into the client-side of your Express apps.

## Usage Example

	var app = require('express').createServer();

	require('mootools-express').listen(app, '/scripts/mootools.js');

	app.listen(80);

The above code will serve the latest version of MooTools Core from localhost/scripts/mootools.js.