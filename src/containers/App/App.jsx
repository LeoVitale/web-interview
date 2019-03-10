import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from 'images/logo.png'
import Header from 'components/molecules/Header'
import Home from 'containers/Home'
import Appointments from 'containers/Appointments'
import NewAppointments from 'containers/NewAppointments'
import FamilyMembers from 'containers/FamilyMembers'

import './App.scss'

class App extends Component {
  state = {
    fetchedUser: false,
  }
  componentDidMount() {
    const { loadUser } = this.props
    loadUser('1')
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { app, addMember, changeMember, loadUserFamilyMembers } = nextProps

    if (app.user.id && !prevState.fetchedUser) {
      addMember(app.user)
      changeMember(app.user.id)
      loadUserFamilyMembers(app.user.id)
      return {
        fetchedUser: true,
      }
    }
    return null
  }

  render() {
    const {
      app: { user },
    } = this.props

    return (
      <Router className="app">
        <Fragment>
          <Header logo={logo} user={user} />
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route exact path="/appointments" component={Appointments} />
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
  addMember: PropTypes.func.isRequired,
  changeMember: PropTypes.func.isRequired,
  loadUserFamilyMembers: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
}

export default hot(module)(App)
