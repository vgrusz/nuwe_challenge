var mysql = require("mysql");
var settings = require("./settings.json");
var util = require("util");
var db;

function connectDatabase() {
  if (!db) {
    db = mysql.createConnection(settings);
    db.connect((err) => {
      if (!err) {
        console.log("Now connected to DB");
      } else {
        console.log("Error connecting to DB");
      }
    });
  }
  db.query = util.promisify(db.query);

  return db;
}
module.exports = connectDatabase();
