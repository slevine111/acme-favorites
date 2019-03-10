const express = require('express')
const app = express()
const volleyball = require('volleyball')
const path = require('path')
const { User, Thing } = require('../DataAccess/models/index')

module.exports = app

app.use(volleyball)
app.use('/public', express.static(path.join(__dirname, '..', '..', 'public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'index.html'))
})

app.get('/users', (req, res, next) => {
  User.getAllUsersFavoriteThings()
    .then(users => res.json(users))
    .catch(next)
})

app.get('/things', (req, res, next) => {
  Thing.getAllThingsFavoriteUsers()
    .then(things => res.json(things))
    .catch(next)
})
