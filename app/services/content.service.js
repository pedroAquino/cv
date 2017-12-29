let contentPtBr = require('./ptbr.content');

function ContentService() {
    
    this.getContent = function(localization) {

        if (localization !== 'pt-BR' ||
            localization !== 'en-US') {
            return null;
        }

        if (localization === 'pt-BR') {
            return contentPtBr;
        } else {
            throw new Error('NOT IMPLEMENTED !');
        }
    }
}

module.exports = new ContentService();
