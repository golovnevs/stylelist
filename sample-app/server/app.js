const express = require('express')
const bodyParser = require('body-parser')
const dbService = require('./db-service')
const isEmpty = require('../shared/is-empty')
const app = express()
const port = 3000

// parse application/json
app.use(bodyParser.json())

app.use('*', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Headers', '*')
  next()
})

app.get('/get-results', (req, res) => {
  res.send(dbService.getDb())
})

app.post('/save-results', (req, res) => {
  const text = req.body.text
  if (isEmpty(text)) {
    return res.sendStatus(400)
  }
  dbService.writeDb(text)
  res.sendStatus(201)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${ port }`))
