import NewAppointments from './NewAppointments.jsx'
import { connect } from 'react-redux'
import { loadMember } from 'ducks/family'
import { loadAppointments, loadSlots, newAppointment } from 'ducks/appointments'
import { changeMember } from 'ducks/app'

const mapStateToProps = state => ({
  app: state.app,
  appointments: state.appointments,
  family: state.family,
})

const mapDispatchToProps = {
  loadMember,
  loadAppointments,
  loadSlots,
  changeMember,
  newAppointment,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAppointments)
