import App from './App.jsx'
import { connect } from 'react-redux'
import { loadUser, loadUserFamilyMembers } from 'ducks/app'

const mapStateToProps = state => ({
  app: state.app,
})

const mapDispatchToProps = {
  loadUser,
  loadUserFamilyMembers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
