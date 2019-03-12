import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from '../../client/Navbar'
import { NavLink } from 'react-router-dom'

describe('Navbar component', () => {
  before(() => {
    Enzyme.configure({ adapter: new Adapter() })
  })

  let navbar
  let usersNumber
  let thingsNumber
  beforeEach(() => {
    usersNumber = Math.round(5 * Math.random())
    thingsNumber = Math.round(5 * Math.random())
    navbar = new shallow(
      (
        <Navbar
          numberDataEntries={{ users: usersNumber, things: thingsNumber }}
        />
      )
    )
  })

  it('it contains two Navlink components', () => {
    expect(navbar.find(NavLink)).to.have.length(2)
  })
  it('one NavLink component links to the /users route and the other links to the /things route', () => {
    const usersLink = navbar
      .find(NavLink)
      .filterWhere(node => node.prop('to') === '/users')
    const thingsLink = navbar
      .find(NavLink)
      .filterWhere(node => node.prop('to') === '/things')
    expect(usersLink).to.have.length(1)
    expect(thingsLink).to.have.length(1)
  })
})
