const express = require('express')
const controller = require('./controller/controller.js')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'));

app.use(bodyParser.json());
// app.get('/checkout', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/purchase', controller.post)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})