const app = require('supertest')(require('../server/api/index'))
const { expect } = require('chai')
const syncAndSeed = require('../server/DataAccess/index')

describe('Routes', () => {
  beforeEach(() => {
    return syncAndSeed()
  })

  describe('GET / route', () => {
    it('it returns a HTML file', done => {
      app
        .get('/')
        .expect(200)
        .expect('Content-Type', /text\/html/, done)
    })
  })
  describe('GET /users', () => {
    it('it returns a JSON object', done => {
      app
        .get('/users')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })
    it('it returns all users in the database', done => {
      app.get('/users').end((err, response) => {
        if (err) return done(err)
        expect(response.body.length).to.equal(4)
        done()
      })
    })
  })
  describe('GET /things', () => {
    it('it returns a JSON object', done => {
      app
        .get('/things')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })
    it('it returns all things in the database', done => {
      app.get('/things').end((err, response) => {
        if (err) return done(err)
        expect(response.body.length).to.equal(5)
        done()
      })
    })
  })
})
