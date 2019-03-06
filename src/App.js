import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.png'
import Header from 'components/molecules/Header'
import Appointments from 'containers/Appointments'
import NewAppointments from 'containers/NewAppointments'
import FamilyMembers from 'containers/FamilyMembers'
import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
      .then(() => {
        // TODO: Handle response here
      })
      .catch(() => {
        // TODO: Handle error here
      })
  }

  render() {
    return (
      <Router className="app">
        <Fragment>
          <Header logo={logo} />
          <div className="main">
            <Route exact path="/" component={Appointments} />
            <Route path="/new-appointments" component={NewAppointments} />
            <Route path="/family-members" component={FamilyMembers} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default hot(module)(App)
