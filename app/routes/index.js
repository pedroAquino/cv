var express = require('express'),
	router = express.Router(),
	accepts = require('accepts'),
	ContentService = require('../services/content/content.service');

router.get('/', function(request, response, next) {
	var contentService = new ContentService();
	var language = accepts(request).languages()[0];
	response.render('index', contentService.getContent(language));
});

module.exports = router;