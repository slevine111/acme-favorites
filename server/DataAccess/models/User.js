const connection = require('../connection')
const Sequelize = require('sequelize')

const User = connection.define('user', {
  username: Sequelize.STRING
})

module.exports = User
