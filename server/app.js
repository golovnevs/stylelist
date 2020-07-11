const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
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
  const db = fs.readFileSync('./db.json')
  res.send(db)
})

app.post('/save-results', (req, res) => {
  const db = JSON.parse(fs.readFileSync('./db.json'))
  db.push({ text: req.body.text })
  fs.writeFileSync('./db.json', JSON.stringify(db))
  res.sendStatus(201)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${ port }`))
