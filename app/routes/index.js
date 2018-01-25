var express = require('express'),
	router = express.Router(),
	accepts = require('accepts'),
	ContentService = require('../services/content/content.service');

router.get('/', function(request, response, next) {
	var language = accepts(request).languages()[0].toLowerCase();

	if (language === 'pt-br' ||
		language === 'pt') {
		sresponse.redirect('/pt');
	} else {
		response.redirect('/en');
	}
});

router.get('/pt', function(request, response, next) {
	var contentService = new ContentService();
	response.render('index', contentService.getContent('pt'));
});

router.get('/en', function(request, response, next) {
	var contentService = new ContentService();
	response.render('index', contentService.getContent('en'));
});

module.exports = router;