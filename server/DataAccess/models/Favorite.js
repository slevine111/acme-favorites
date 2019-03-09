const connection = require('../connection')
const Sequelize = require('sequelize')

const Favorite = connection.define('favorite', {
  rank: Sequelize.INTEGER
})

module.exports = Favorite
