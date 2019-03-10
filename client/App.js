import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import UsersList from './UsersList'
import ThingsList from './ThingsList'
import TestApp from './TestApp'

class App extends Component {
  render() {
    console.log('in render')
    return (
      <Router>
        <Route component={TestApp} />
      </Router>
    )
  }
}

export default App
