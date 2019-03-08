import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import Radio from 'components/atoms/Radio'
import Button from 'components/atoms/Button'
import TextArea from 'components/atoms/TextArea'
import Title from 'components/atoms/Title'

import UserItem from 'components/molecules/UserItem'

import { bookBtn, divider, listHour } from './NewAppointments.module.scss'
class NewAppointments extends Component {
  state = {
    symptoms: '',
    hour: '',
    appointments: [],
  }

  componentDidMount() {
    const { loadSlots } = this.props
    loadSlots()
  }

  onChangeForm = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const { symptoms, hour, appointments } = this.state

    return (
      <div>
        <h1>New Appointments</h1>
        <UserItem action={<div>change</div>} />
        <hr className={divider} />
        <Title icon="clock" label="Date & Time" />
        <div className={listHour}>
          {appointments.map(slot => (
            <Radio
              key={slot}
              label={moment(slot).format('DD/MM hh:mm')}
              name="hour"
              value={slot}
              onChange={this.onChangeForm}
              checked={hour === slot}
            />
          ))}
        </div>
        <Title icon="notes" label="Notes" />
        <div>
          <TextArea
            name="symptoms"
            rows="7"
            placeholder="Describe your symptoms"
            value={symptoms}
            onChange={this.onChangeForm}
          />
        </div>
        <Button className={bookBtn}>Book</Button>
      </div>
    )
  }
}

NewAppointments.propTypes = {
  loadSlots: PropTypes.func.isRequired,
}

export default NewAppointments
