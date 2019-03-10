import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import CustomItem from 'components/molecules/CustomItem'
class Appointments extends Component {
  componentDidMount() {
    const { loadAppointments } = this.props
    loadAppointments()
  }

  render() {
    const {
      appointments: { booked },
      family: { members }
    } = this.props


    return (
      <div>
        <h1>Appointments</h1>
        <h3>Upcoming</h3>
        <div>
          {booked.map(item => {
            const { dateTime, type, id } = item
            const member = members.find(member => member.id === id)
            return <CustomItem key={id} header={type} subHeader={moment(dateTime).format('LLLL')} />
          })}
        </div>
      </div>
    )
  }
}

Appointments.propTypes = {
  appointments: PropTypes.object.isRequired,
  loadAppointments: PropTypes.func.isRequired,
  family: PropTypes.object.isRequired,
}

export default Appointments
