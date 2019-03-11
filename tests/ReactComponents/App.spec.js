import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../client/App'
import Navbar from '../../client/Navbar'
import { Route } from 'react-router-dom'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

var mock = new MockAdapter(axios)

mock.onGet('/users').reply(200, [
  {
    id: 4,
    username: 'larry',
    favorites: [
      {
        id: 1,
        rank: 1,
        thing: {
          id: 3,
          name: 'bar'
        }
      },
      {
        id: 2,
        rank: 2,
        thing: {
          id: 1,
          name: 'bazz'
        }
      }
    ]
  },
  {
    id: 1,
    username: 'moe',
    favorites: [
      {
        id: 3,
        rank: 1,
        thing: {
          id: 1,
          name: 'bazz'
        }
      },
      {
        id: 4,
        rank: 5,
        thing: {
          id: 3,
          name: 'bar'
        }
      },
      {
        id: 5,
        rank: 7,
        thing: {
          id: 2,
          name: 'foo'
        }
      }
    ]
  },
  {
    id: 2,
    username: 'curly',
    favorites: []
  },
  {
    id: 3,
    username: 'shep',
    favorites: []
  }
])

mock.onGet('/things').reply(200, [
  {
    id: 4,
    name: 'bar',
    favorites: [
      {
        id: 1,
        rank: 1,
        user: {
          id: 1,
          username: 'larry'
        }
      },
      {
        id: 3,
        rank: 5,
        user: {
          id: 3,
          username: 'moe'
        }
      }
    ]
  },
  {
    id: 1,
    name: 'bazz',
    favorites: [
      {
        id: 2,
        rank: 1,
        user: {
          id: 3,
          username: 'moe'
        }
      },
      {
        id: 4,
        rank: 2,
        user: {
          id: 1,
          username: 'larry'
        }
      }
    ]
  },
  {
    id: 2,
    name: 'foo',
    favorites: [
      {
        id: 5,
        rank: 7,
        user: {
          id: 3,
          username: 'moe'
        }
      }
    ]
  },
  {
    id: 5,
    name: 'quq',
    favorites: []
  },
  {
    id: 3,
    name: 'quip',
    favorites: []
  }
])

Enzyme.configure({ adapter: new Adapter() })

let app
beforeEach(() => {
  app = shallow(<App />)
})

describe('App component', () => {
  it('it has Navbar and Route components', () => {
    expect(app.find(Navbar)).to.have.length(1)
    expect(app.find(Route)).to.have.length.greaterThan(0)
  })
  it('the state has users, things, and numberDataEntries properties, which are all arrays', () => {
    const state = app.state()
    expect(state.users).to.be.ok
    expect(state.things).to.be.ok
    expect(state.numberDataEntries).to.be.ok
  })
  it('the users and things properties are arrays and the numberDataEntries property is an object', () => {
    const state = app.state()
    expect(Array.isArray(state.users)).to.be.true
    expect(Array.isArray(state.things)).to.be.true
    const numberDataEntriesConditions =
      !Array.isArray(state.numberDataEntries) &&
      state.numberDataEntries !== null &&
      typeof state.numberDataEntries === 'object'
    expect(numberDataEntriesConditions).to.be.true
  })
  it('it passes numberDataEntries as prop down to Navbar', () => {
    const navbarWrapper = app.find(Navbar)
    expect(navbarWrapper.props().numberDataEntries).to.equal(
      app.state().numberDataEntries
    )
  })
})
