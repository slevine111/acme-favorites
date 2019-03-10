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
  return User.findAll({ include: { model: Favorite, include: Thing } })
}

Thing.getAllThingsFavoriteUsers = () => {
  return Thing.findAll({ include: { model: Favorite, include: User } })
}

module.exports = { setAssociations, User, Thing, Favorite }
