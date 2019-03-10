/*import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../client/App'
import Navbar from '../../client/Navbar'
import { HashRouter, Route } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

let app
beforeEach(() => {
  app = shallow(<App />)
})

describe('App component', () => {
  it('it has Navbar and Route components', () => {
    console.log('--------------------------')
    console.log(typeof Navbar, Object.keys(Navbar), Object.keys(Route), Navbar)
    expect(app.find(HashRouter).some(Navbar)).to.equal(true)
    expect(app.find(Route)).to.have.length.greaterThan(0)
  })
})*/
