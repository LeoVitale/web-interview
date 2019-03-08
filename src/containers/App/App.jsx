import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from 'images/logo.png'
import Header from 'components/molecules/Header'
import Appointments from 'containers/Appointments'
import NewAppointments from 'containers/NewAppointments'
import FamilyMembers from 'containers/FamilyMembers'

import './App.scss'

class App extends Component {
  componentDidMount() {
    const { loadUser, loadUserFamilyMembers } = this.props
    loadUser('1')
    loadUserFamilyMembers('1')
  }

  render() {
    console.log(this.props)
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

App.propTypes = {
  loadUser: PropTypes.func.isRequired,
  loadUserFamilyMembers: PropTypes.func.isRequired,
}

export default hot(module)(App)
