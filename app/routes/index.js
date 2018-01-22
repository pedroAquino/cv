var express = require('express'),
	router = express.Router(),
	ContentService = require('../services/content/content.service');

router.get('/', function(request, response, next) {
	var contentService = new ContentService();
	// response.render('index', contentService.getContent('pt-BR'));
	response.render('index', contentService.getContent('en-US'));
});

module.exports = router;