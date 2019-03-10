const express = require('express')
const app = express()
const volleyball = require('volleyball')
const { User, Thing } = require('../DataAccess/models/index')

module.exports = app

app.use(volleyball)

app.get('/', (req, res) => {
  res.send('wired up')
})
