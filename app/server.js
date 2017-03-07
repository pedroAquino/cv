var server = {
	
	init : function() {
		console.log("setting server up...");

		var express = require("express");

		var app = express();

		app = this.setViewEngine(app);
		app = this.setPublicDir(app, express);
		app = this.setRoutes(app);
		app = this.start(app);

		module.exports = app;
	},

	setViewEngine : function(app) {
		app.set("views",  __dirname + "/public");
		app.set("view engine", "pug");

		return app;
	},

	setPublicDir: function(app, express) {
		var path = require("path");
		
		app.use(express.static(path.join(__dirname, "public")));
		app.use(express.static(path.join(__dirname, "bower_components")));

		console.log("*************************************");
		console.log(path.join(__dirname, "bower_components"));
		console.log("*************************************");

		return app;
	},

	setRoutes: function(app) { 
		var index = require("./routes/index");
		app.use("/", index);

		return app;
	},

	start: function(app) {
		var	config = require("../config");
		
		app.listen(config.port);
		
		console.log("listening server on port " + config.port);

		return app;
	}
};


server.init();