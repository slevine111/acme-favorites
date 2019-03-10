const { Thing, User, Favorite } = require('../server/DataAccess/models/index')
const syncAndSeed = require('../server/DataAccess/index')
const { expect } = require('chai')

beforeEach(() => {
  return syncAndSeed()
})

describe('Models in Database', () => {
  describe('Model characteristics', () => {
    it('User model only has username category', () => {
      return User.findByPk(1).then(user => {
        expect(user.username).to.be.ok
        expect(Object.keys(user.get()).length).to.equal(4)
      })
    })
    it('Thing model only has name category', () => {
      return Thing.findByPk(1).then(thing => {
        expect(thing.name).to.be.ok
        expect(Object.keys(thing.get()).length).to.equal(4)
      })
    })
    it('Favorite model has rank category', () => {
      return Favorite.findByPk(1).then(favorite => {
        expect(favorite.rank).to.be.ok
      })
    })
    it('Favorite model has foreign key that reference User model', () => {
      return Favorite.findByPk(1).then(favorite => {
        expect(favorite.userId).to.be.ok
      })
    })
    it('Favorite model has foreign key that reference Thing model', () => {
      return Favorite.findByPk(1).then(favorite => {
        expect(favorite.thingId).to.be.ok
      })
    })
  })

  describe('Class Methods on Models', () => {
    describe('User.getAllUsersFavoriteThings', () => {
      let dataReturned
      before(async () => {
        const _dataReturned = await User.getAllUsersFavoriteThings()
        dataReturned = _dataReturned
      })

      it('it returns all instances in the User model', () => {
        expect(dataReturned.length).to.equal(4)
      })
      it('it should include the favorite instances associated to each user', () => {
        expect(dataReturned[0].favorites).to.be.ok
      })
      it('the favorites instances should include the thing they are associated to', () => {
        const larry = dataReturned.filter(user => user.username === 'larry')[0]
        expect(larry.favorites[0].thing).to.be.ok
      })
    })
    describe('Thing.getAllThingsFavoriteUsers', () => {
      let dataReturned
      before(async () => {
        const _dataReturned = await Thing.getAllThingsFavoriteUsers()
        dataReturned = _dataReturned
      })

      it('it returns all instances in the Thing model', () => {
        expect(dataReturned.length).to.equal(5)
      })
      it('it should include the favorite instances associated to each thing', () => {
        expect(dataReturned[0].favorites).to.be.ok
      })
      it('the favorites instances should include the user they are associated to', () => {
        const bar = dataReturned.filter(thing => thing.name === 'bar')[0]
        expect(bar.favorites[0].user).to.be.ok
      })
    })
  })
})
