import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'

import TextBox from 'components/atoms/TextBox'
import Button from 'components/atoms/Button'
import Select from 'components/atoms/Select'

import { days, years, months } from 'utils/dates'

import styles from './FamilyMemberForm.module.scss'

const FamilyMemberForm = ({ onSave }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const member = {
    firstName,
    lastName,
  }

  const { familyMembers, row } = styles

  return (
    <Container className={familyMembers}>
      <Row className={row}>
        <Col>
          <h2>Add Family Member</h2>
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
            onChange={e => setFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <TextBox
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
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
          <Select className="select" placeholder="Day" options={days()} />
        </Col>
        <Col>
          <Select className="select" placeholder="Month" options={months()} />
        </Col>
        <Col>
          <Select className="select" placeholder="Year" options={years(1970)} />
        </Col>
      </Row>
      <Row className={row}>
        <Col>
          <TextBox
            label="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            options={[
              { value: 'manle', label: 'Male' },
              { value: 'female', label: 'Female' },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => onSave(member)}>Save</Button>
        </Col>
      </Row>
    </Container>
  )
}

FamilyMemberForm.propTypes = {
  onSave: PropTypes.func.isRequired,
}

export default FamilyMemberForm
