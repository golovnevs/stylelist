const fs = require('fs')
const path = require('path')

const getDb = () => {
  return fs.readFileSync(path.resolve(__dirname, './db.json'))
}

const writeDb = (text) => {
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, './db.json')))
  db.push({ text })
  fs.writeFileSync(path.resolve(__dirname, './db.json'), JSON.stringify(db))
}

module.exports = {
  getDb,
  writeDb,
}
