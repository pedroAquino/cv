var express = require('express'),
	router = express.Router(),
	accepts = require('accepts'),
	ContentService = require('../services/content/content.service');

router.get('/', function(request, response, next) {
	var contentService = new ContentService();
	// response.render('index', contentService.getContent('pt-BR'));
	console.log('LANGUAGES  :');
	console.log(accepts(request).languages());
	response.render('index', contentService.getContent('en-US'));
});

module.exports = router;