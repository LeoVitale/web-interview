import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'

import TextBox from 'components/atoms/TextBox'
import Button from 'components/atoms/Button'
import Select from 'components/atoms/Select'

import { days, years, months } from 'utils/dates'
import { getInitials } from 'utils/filters'

import { familyMembers, row } from './FamilyMemberForm.module.scss'

const FamilyMemberForm = ({ onSave }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    dateOfBirth: { day: '', month: '', year: '' },
  }
  const [member, setMember] = useState(initialState)

  const {
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth: { day, month, year },
  } = member
  const disableButton = !(
    !!firstName &&
    !!lastName &&
    !!email &&
    !!gender &&
    !!day &&
    !!month &&
    !!year
  )

  const handleInputChange = event => {
    const { name, value } = event.target
    setMember({ ...member, [name]: value })
  }

  const handleSelectChange = (option, input) => {
    const { name } = input
    const { value } = option
    if (input.name === 'gender') {
      setMember({ ...member, [name]: value })
    } else {
      setMember({
        ...member,
        dateOfBirth: { ...member.dateOfBirth, [name]: value },
      })
    }
  }

  const onSaveForm = () => {
    const newMember = {
      avatar: `https://via.placeholder.com/150/7e5ced/FFFFFF/?text=${getInitials(
        `${firstName} ${lastName}`
      )}`,
      dateOfBirth: `${year}-${month}-${day}`,
      firstName,
      lastName,
      email,
    }

    onSave(newMember)
    setMember(initialState)
  }

  return (
    <Container className={familyMembers}>
      <Row className={row}>
        <Col>
          <p>
            Please remember that for children under the age of 16 all
            consultations must be via video and a parent or guardian must be
            present.
          </p>
        </Col>
      </Row>
      <Row className={row}>
        <Col>
          <TextBox
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <TextBox
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="date-of-birth">Date of Birth</label>
        </Col>
      </Row>
      <Row className={row} id="date-of-birth">
        <Col>
          <Select
            onChange={handleSelectChange}
            name="day"
            className="select"
            placeholder="Day"
            options={days()}
          />
        </Col>
        <Col>
          <Select
            onChange={handleSelectChange}
            name="month"
            className="select"
            placeholder="Month"
            options={months()}
          />
        </Col>
        <Col>
          <Select
            onChange={handleSelectChange}
            name="year"
            className="select"
            placeholder="Year"
            options={years(1970)}
          />
        </Col>
      </Row>
      <Row className={row}>
        <Col>
          <TextBox
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <label htmlFor="gender">Gender</label>
        </Col>
      </Row>
      <Row className={row}>
        <Col>
          <Select
            id="gender"
            className="select"
            name="gender"
            onChange={handleSelectChange}
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button disabled={disableButton} onClick={onSaveForm}>
            Save
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

FamilyMemberForm.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default FamilyMemberForm
