const express = require('express')
const bodyParser = require('body-parser') // parse json data easily
const cors = require('cors')
const morgan = require('morgan')

const app = express() // building an express server with rest in-points
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})
app.listen(process.env.PORT || 8081)
