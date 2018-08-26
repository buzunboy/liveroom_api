const admin = require('firebase-admin');

var serviceAccount = require('../../config/server_configurations/liveroom-39881-f0b496570692.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const settings = {timestampsInSnapshots: true};
var db = admin.firestore();
db.settings(settings);

class CloudDB {

    getAllUsers(collectedUsers) {
        var retVal = [];
        db.collection("Users").get().then(function(query) {
            query.forEach(function(doc) {
                retVal.push(doc.data());
            })
            collectedUsers(retVal);
        })
    };

}

module.exports = CloudDB;