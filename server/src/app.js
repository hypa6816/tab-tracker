const express = require('express')
const bodyParser = require('body-parser') // parse json data easily
const cors = require('cors')
const morgan = require('morgan')

const app = express() // building an express server with rest in-points
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

/* register end point which takes a post request and will return a message with an email that was
* provided in the payload
*/
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})
app.listen(process.env.PORT || 8081)
