const query = require('../model/model.js')
const connection = require('../connection/connection.js')

module.exports = {
  post: (req, res) => {
    const purchase = req.body;
    // console.log(purchase);
    const queryString = `insert into purchases (user, email, password, address_line_1, address_line_2, city, state, zip_code, phone_number, cc_number, expires, cvv, cc_zip) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    query(queryString, [purchase.name, purchase.email, purchase.pass, purchase.addressline1, purchase.addressline2, purchase.city, purchase.state, purchase.zip, purchase.phone, purchase.cardNumber, purchase.expire, purchase.ccv, purchase.ccZip], (err) => {
      if (err) {
        console.log(err);
        res.status(404);
        res.end();
      } else {
        res.sendStatus(201);
      }
    });
  }
}