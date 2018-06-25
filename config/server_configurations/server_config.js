var conf = require('./server_configurations.json');

class ServerConfiguration {

    getConfiguration() {
        return conf;
    }

}

module.exports = ServerConfiguration;