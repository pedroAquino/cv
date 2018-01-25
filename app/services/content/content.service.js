var contentPt = require('./pt.content');
var contentEn = require('./en.content');

module.exports = function ContentService() {
    
    this.getContent = function(language) {

        if (language === 'pt-BR' ||
            language == 'pt') {
            return contentPt;
        } else {
            return contentEn;
        }
    }
}
