import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-grid-system'
import TextBox from 'components/atoms/TextBox'
import Button from 'components/atoms/Button'

const FamilyMemberForm = ({ onSave }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const member = {
    firstName,
    lastName,
  }
  return (
    <Container>
      <Row>
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
