var express = require('express'),
	router = express.Router(),
	ContentService = require('../services/content/content.service');

router.get('/', function(request, response, next) {
	var contentService = new ContentService();
	response.render('teste', contentService.getContent('pt-BR'));
});

module.exports = router;