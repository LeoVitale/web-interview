import React, { Component } from 'react'
import moment from 'moment'

import Radio from 'components/atoms/Radio'
import Button from 'components/atoms/Button'
import TextArea from 'components/atoms/TextArea'
import Icon from 'components/atoms/Icon'

import UserItem from 'components/molecules/UserItem'

import { availableSlots } from 'services'
import styles from './NewAppointments.module.scss'
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
    const { bookBtn, divider } = styles

    return (
      <div>
        <h1>New Appointments</h1>
        <UserItem action={<div>change</div>} />
        <hr className={divider} />
        <h3>
          <Icon type="clock" />
          Date & Time
        </h3>
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
        <h3>
          <Icon type="notes" />
          Notes
        </h3>
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

export default NewAppointments
