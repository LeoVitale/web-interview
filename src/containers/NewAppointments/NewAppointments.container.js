import NewAppointments from './NewAppointments.jsx'
import { connect } from 'react-redux'
import { loadMember } from 'ducks/family'
import { loadAppointments, loadSlots } from 'ducks/appointments'

const mapStateToProps = state => ({
  app: state.app,
  appointments: state.appointments,
  family: state.family,
})

const mapDispatchToProps = {
  loadMember,
  loadAppointments,
  loadSlots,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAppointments)
