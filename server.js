const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
var db             = require('./config/db');
const app            = express();
const port = 8090;

var restart_called = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  db = database.db("smart_agriculture")
  require('./app/routes')(app, db);

app.listen(port, () => {
  console.log('We are live on ' + port);
});

// process.on('exit', function() { 
//     console.log("Bye bye!"); 
// });

})