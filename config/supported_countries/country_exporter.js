var en = require('./EN.json');
var tr = require('./TR.json');

class CountryConfiguration {
    constructor(languageCode) {
        this.code = languageCode
    }

    getConfiguration() {
        if (this.code) {
            if (this.code.localeCompare('EN') == 0) {
                return en;
            } else if (this.code.localeCompare('TR') == 0) {
                return tr;
            }
        }
        return en;
    }

}

module.exports = CountryConfiguration;