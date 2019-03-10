const Sequelize = require('sequelize')

const connection = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/acme-favorites',
  {
    logging: false
  }
)

module.exports = connection
