import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import Button from 'components/atoms/Button'
import Title from 'components/atoms/Title'
import CustomItem from 'components/molecules/CustomItem'
import { addAppointments } from './Appointments.module.scss'

class Appointments extends Component {
  componentDidMount() {
    const { loadAppointments } = this.props
    loadAppointments()
  }

  navigateToBook = () => {
    const { history } = this.props
    history.push('/new-appointments')
  }

  render() {
    const {
      appointments: { booked },
      family: { members }
    } = this.props


    return (
      <div>
        <Title label="Appointments" tag="h1"/>
        <Title label="Upcoming" tag="h3"/>
        <div>
          {booked.map(item => {
            const { dateTime, type, id } = item
            const member = members.find(member => member.id === id)
            return <CustomItem avatar={member.avatar} key={id} header={type} subHeader={moment(dateTime).format('LLLL')} />
          })}
        </div>
        <Button className={addAppointments} onClick={this.navigateToBook}>
          <CustomItem header="Book New Appointment" />
        </Button>
      </div>
    )
  }
}

Appointments.propTypes = {
  appointments: PropTypes.object.isRequired,
  loadAppointments: PropTypes.func.isRequired,
  family: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Appointments
