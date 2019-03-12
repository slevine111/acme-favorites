import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import UsersList from './UsersList'
import ThingsList from './ThingsList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      things: [],
      numberDataEntries: { users: 0, things: 0 }
    }
  }

  componentDidMount() {
    return Promise.all([axios.get('/api/users'), axios.get('/api/things')])
      .then(([users, things]) => {
        return {
          users: users.data,
          things: things.data,
          numberDataEntries: {
            users: users.data.length,
            things: things.data.length
          }
        }
      })
      .then(data => this.setState(data))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <Router>
        <div>
          <h1> Acme Favorites </h1>
          <Navbar numberDataEntries={this.state.numberDataEntries} />
          <Switch>
            <Route
              path="/users"
              render={() => <UsersList users={this.state.users} />}
            />
            <Route
              path="/things"
              render={() => <ThingsList things={this.state.things} />}
            />
            <Redirect to="/users" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
