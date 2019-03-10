const User = require('./User')
const Thing = require('./Thing')
const Favorite = require('./Favorite')

const setAssociations = () => {
  return Promise.all([
    User.hasMany(Favorite),
    Favorite.belongsTo(User),
    Thing.hasMany(Favorite),
    Favorite.belongsTo(Thing)
  ])
}

User.getAllUsersFavoriteThings = () => {
  return User.findAll({
    attributes: ['id', 'username'],
    include: {
      model: Favorite,
      attributes: ['id', 'rank'],
      include: { model: Thing, attributes: ['id', 'name'] }
    }
  })
}

Thing.getAllThingsFavoriteUsers = () => {
  return Thing.findAll({
    attributes: ['id', 'name'],
    include: {
      model: Favorite,
      attributes: ['id', 'rank'],
      include: { model: User, attributes: ['id', 'username'] }
    }
  })
}

module.exports = { setAssociations, User, Thing, Favorite }
