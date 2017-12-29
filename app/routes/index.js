var express = require('express'),
	router = express.Router(),
	ContentService = require('../services/content.service');

console.log(ContentService.getContent('pt-BR'));

router.get('/', function(request, response, next) {
	response.render('index');
});

module.exports = router;