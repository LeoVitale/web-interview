import React, { Component } from 'react'
import moment from 'moment'

import Radio from 'components/atoms/Radio'
import Button from 'components/atoms/Button'
import TextArea from 'components/atoms/TextArea'

import { availableSlots } from 'services'
moment.locale('gb')
class NewAppointments extends Component {
  state = {
    symptoms: '',
    hour: '',
    appointments: [],
  }

  componentDidMount() {
    availableSlots()
      .then(response => {
        this.setState({ appointments: response })
      })
      .catch(() => {
        // TODO: Handle error here
      })
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
        <h3>Date & Time</h3>
        <div>
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
        <h3>Notes</h3>
        <div>
          <TextArea
            name="symptoms"
            rows="10"
            placeholder="Describe your symptoms"
            value={symptoms}
            onChange={this.onChangeForm}
          />
        </div>
        <Button>Book</Button>
      </div>
    )
  }
}

export default NewAppointments
