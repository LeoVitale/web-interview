import FamilyMember from './FamilyMembers.jsx'
import { connect } from 'react-redux'
import { loadMember, loadUserFamilyMembers } from 'ducks/family'

const mapStateToProps = state => ({
  app: state.app,
  appointments: state.appointments,
  family: state.family,
})

const mapDispatchToProps = {
  loadMember,
  loadUserFamilyMembers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyMember)
