var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'checkout'
})

connection.connect((err) => {
  if (err) {
    console.log('Error connecting!');
  } else {
    console.log('Connected!');
  }
})

module.exports.connection = connection;