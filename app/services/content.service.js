var contentPtBr = require('./ptbr.content');

module.exports = function ContentService() {
    
    this.getContent = function(localization) {

        if (localization !== 'pt-BR' &&
            localization !== 'en-US') {
            console.log(localization);
            return null;
        }

        if (localization === 'pt-BR') {
            console.log(contentPtBr);
            return contentPtBr;
        } else {
            throw new Error('NOT IMPLEMENTED !');
        }
    }
}
