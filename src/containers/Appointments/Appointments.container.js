import Appointments from './Appointments.jsx'
import { connect } from 'react-redux'
import { loadAppointments } from 'ducks/appointments'

const mapStateToProps = state => ({
  app: state.app,
  appointments: state.appointments,
  family: state.family,
})

const mapDispatchToProps = {
  loadAppointments,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appointments)
