import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/atoms/Icon'
import Title from 'components/atoms/Title'
import Button from 'components/atoms/Button'
import Modal from 'components/molecules/Modal'
import UserItem from 'components/molecules/UserItem'
import FamilyMemberForm from 'components/organisms/FamilyMemberForm'

import { addFamilyMember } from './FamilyMembers.module.scss'

class FamilyMembers extends Component {
  state = {
    isModalOpen: false,
    fetchedMembers: false,
  }

  toggleModal = () => {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  saveNewMember = member => {
    const { addNewMember, user } = this.props
    addNewMember(user.id, member)
    this.toggleModal()
  }

  selectMember = id => () => {
    const { changeMember, onChangeMember } = this.props
    onChangeMember && onChangeMember()
    changeMember(id)
  }

  render() {
    const { isModalOpen } = this.state
    const {
      family: { members },
    } = this.props

    return (
      <div>
        <Title label="Family Members" tag="h1" />
        {members.map(member => (
          <Button
            key={member.id}
            className={addFamilyMember}
            onClick={this.selectMember(member.id)}
          >
            <UserItem user={member} action={<Icon type="arrow" />} />
          </Button>
        ))}
        <Button className={addFamilyMember} onClick={this.toggleModal}>
          <UserItem header="Add Family Member" />
        </Button>
        <Modal
          title="Add Family Member"
          open={isModalOpen}
          onClose={this.toggleModal}
        >
          <FamilyMemberForm onSave={this.saveNewMember} />
        </Modal>
      </div>
    )
  }
}

FamilyMembers.propTypes = {
  user: PropTypes.object.isRequired,
  family: PropTypes.object.isRequired,
  changeMember: PropTypes.func.isRequired,
  addNewMember: PropTypes.func.isRequired,
  onChangeMember: PropTypes.func,
}

FamilyMembers.defaultProps = {
  user: {},
  family: {},
}

export default FamilyMembers
