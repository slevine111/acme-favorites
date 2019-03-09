const connection = require('../connection')
const Sequelize = require('sequelize')

const Thing = connection.define('thing', {
  name: Sequelize.STRING
})

module.exports = Thing
