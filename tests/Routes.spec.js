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
  describe('GET /public/:fileName route for serving up static files', () => {
    it('it returns a file if :fileName is the name of a file (extension included) in public folder', done => {
      app
        .get('/public/styles.css')
        .expect(200)
        .expect('Content-Type', /text/, done)
    })
  })

  describe('GET /api/users', () => {
    it('it returns a JSON object', done => {
      app
        .get('/api/users')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })
    it('it returns all users in the database', done => {
      app.get('/api/users').end((err, response) => {
        if (err) return done(err)
        expect(response.body.length).to.equal(4)
        done()
      })
    })
  })
  describe('GET /api/things', () => {
    it('it returns a JSON object', done => {
      app
        .get('/api/things')
        .expect(200)
        .expect('Content-Type', /application\/json/, done)
    })
    it('it returns all things in the database', done => {
      app.get('/api/things').end((err, response) => {
        if (err) return done(err)
        expect(response.body.length).to.equal(5)
        done()
      })
    })
  })
})
