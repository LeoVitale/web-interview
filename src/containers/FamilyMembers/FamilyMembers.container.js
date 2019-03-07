import FamilyMember from './FamilyMembers.jsx'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  appointments: state.appointments.appointments,
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyMember)
