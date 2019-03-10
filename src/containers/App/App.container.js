import App from './App.jsx'
import { connect } from 'react-redux'
import { loadUser, changeMember } from 'ducks/app'
import { loadUserFamilyMembers, addMember } from 'ducks/family'

const mapStateToProps = state => ({
  app: state.app,
})

const mapDispatchToProps = {
  loadUser,
  changeMember,
  addMember,
  loadUserFamilyMembers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
