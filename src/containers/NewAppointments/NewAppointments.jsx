import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Redirect } from 'react-router-dom'

import { findMember } from 'utils/filters'

import Radio from 'components/atoms/Radio'
import Button from 'components/atoms/Button'
import TextArea from 'components/atoms/TextArea'
import Title from 'components/atoms/Title'
import Select from 'components/atoms/Select'

import UserItem from 'components/molecules/UserItem'
import Modal from 'components/molecules/Modal'

import FamilyMembers from 'containers/FamilyMembers'

import { bookBtn, divider, listHour } from './NewAppointments.module.scss'
class NewAppointments extends Component {
  state = {
    symptoms: '',
    hour: '',
    type: '',
    isModalOpen: false,
  }

  componentDidMount() {
    const { loadSlots } = this.props
    loadSlots()
  }

  onChangeForm = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  toggleFamilyModal = () => {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  onChangeMember = id => {
    const { changeMember } = this.props
    changeMember(id)
    this.toggleFamilyModal()
  }

  handleSelectChange = (option, input) => {
    const { name } = input
    const { value } = option
    this.setState({ [name]: value })
  }

  onClickBook = () => {
    const {
      app: { memberSelected },
      newAppointment,
    } = this.props
    const { hour, type, symptoms } = this.state
    const appointment = {
      userId: memberSelected,
      dateTime: hour,
      notes: symptoms,
      type,
    }
    newAppointment(appointment)
  }

  render() {
    const { symptoms, hour, type, isModalOpen } = this.state
    const {
      app: { memberSelected, user },
      appointments,
      family: { members },
    } = this.props
    const { availableSlots, hasNewAppointment } = appointments
    const disableButton = !(
      !!hour &&
      !!type
    )

    if (hasNewAppointment) {
      return (
        <Redirect
          to={{
            pathname: '/appointments',
          }}
        />
      )
    }

    return (
      <div>
        <Title label="New Appointment" tag="h1"/>
        <Title/>
        {user && (
          <UserItem
            user={findMember(memberSelected, user, members)}
            action={
              <Button type="link" onClick={this.toggleFamilyModal}>
                change
              </Button>
            }
          />
        )}
        <hr className={divider} />
        <Title icon="clock" label="Date & Time" tag="h3"/>
        <div className={listHour}>
          {availableSlots.map(slot => (
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
        <Title icon="notes" label="Notes" tag="h3"/>
        <div>
          <Select
            id="type"
            className="select"
            name="type"
            onChange={this.handleSelectChange}
            options={[
              { value: 'GP appointment', label: 'GP appointment' },
              { value: 'Physio appointment', label: 'Physio appointment' },
            ]}
          />
        </div>
        <Title icon="notes" label="Notes" tag="h3"/>
        <div>
          <TextArea
            name="symptoms"
            rows="7"
            placeholder="Describe your symptoms"
            value={symptoms}
            onChange={this.onChangeForm}
          />
        </div>
        <Button disabled={disableButton} onClick={this.onClickBook} className={bookBtn}>
          Book
        </Button>
        <Modal
          open={isModalOpen}
          onClose={this.toggleFamilyModal}
        >
          <FamilyMembers onChangeMember={this.onChangeMember} />
        </Modal>
      </div>
    )
  }
}

NewAppointments.propTypes = {
  loadSlots: PropTypes.func.isRequired,
  app: PropTypes.object.isRequired,
  family: PropTypes.object.isRequired,
  changeMember: PropTypes.func.isRequired,
  newAppointment: PropTypes.func.isRequired,
  appointments: PropTypes.object.isRequired,
}

export default NewAppointments
