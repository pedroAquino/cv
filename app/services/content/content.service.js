var contentPt = require('./pt.content');
var contentEn = require('./en.content');

module.exports = function ContentService() {
    
    this.getContent = function(language) {
        language = language !== 'pt' && 
            language !== 'pt-br' ? 'en' : 'pt';

        return require(`./${language}.content`);
    }
}
