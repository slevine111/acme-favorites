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

module.exports = { setAssociations, User, Thing, Favorite }
