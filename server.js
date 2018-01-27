var server = {
	
	init : function() {
		console.log('setting server up...');

		var express = require('express');

		var app = express();

		app = this.setViewEngine(app);
		app = this.setPublicDir(app, express);
		app = this.setRoutes(app);
		app = this.start(app);

		module.exports = app;
	},

	setViewEngine : function(app) {
		app.set('views',  __dirname + '/app');
		app.engine('html', require('ejs').renderFile);
		app.set('view engine', 'html');

		return app;
	},

	setPublicDir: function(app, express) {
		var path = require('path');
		
		app.use(express.static(path.join(__dirname, '/app/public')));
        app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
        app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

		return app;
	},

	setRoutes: function(app) { 
		var index = require('./app/routes/index');
		app.use('/', index);

		return app;
	},

	start: function(app) {
		var port = process.env.PORT || 3000;
		app.listen(port);

		console.log('listening server on port ' + port);

		return app;
	}
};


server.init();