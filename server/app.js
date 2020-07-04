const express = require('express')
const app = express()
const port = 3000

const db = [
  {
    name: 'vasya',
    result: 5
  }
]

app.all('*', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})

app.get('/get-results', (req, res) => {
  res.send(db)
})

app.post('/save-results', (req, res) => {
  db.push({ name: 'Petya', result: 4 })
  res.sendStatus(201)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${ port }`))
