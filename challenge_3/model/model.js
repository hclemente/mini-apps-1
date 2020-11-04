const db = require('../connection/connection.js');


const queryDatabase = (query, data, callback) => {
  db.connection.query(query, data, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports = queryDatabase;