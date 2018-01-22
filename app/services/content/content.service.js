var contentPtBr = require('./ptbr.content');
var contentEnUs = require('./enus.content');

module.exports = function ContentService() {
    
    this.getContent = function(localization) {

        if (localization !== 'pt-BR' &&
            localization !== 'en-US') {
            return null;
        }

        if (localization === 'pt-BR') {
            return contentPtBr;
        } else {
            return contentEnUs;
        }
    }
}
