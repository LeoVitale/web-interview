import FamilyMember from './FamilyMembers.jsx'
import { connect } from 'react-redux'
import { loadMember, loadUserFamilyMembers, addNewMember } from 'ducks/family'
import { createNewUser, changeMember } from 'ducks/app'

const mapStateToProps = state => ({
  user: state.app.user,
  appointments: state.appointments,
  family: state.family,
})

const mapDispatchToProps = {
  loadMember,
  loadUserFamilyMembers,
  addNewMember,
  createNewUser,
  changeMember,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyMember)
