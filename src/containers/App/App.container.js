import App from './App.jsx'
import { connect } from 'react-redux'
import { loadUser } from 'ducks/app'
import { loadAppointments } from 'ducks/appointments'
import { loadUserFamilyMembers } from 'ducks/family'

const mapStateToProps = state => ({
  app: state.app,
})

const mapDispatchToProps = {
  loadUser,
  loadUserFamilyMembers,
  loadAppointments,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
