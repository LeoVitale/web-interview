import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/atoms/Button'
import Modal from 'components/molecules/Modal'
import UserItem from 'components/molecules/UserItem'
import FamilyMemberForm from 'components/organisms/FamilyMemberForm'
import { addFamilyMember } from './FamilyMembers.module.scss'

class FamilyMembers extends Component {
  state = {
    isModalOpen: false,
    familyMembersQtd: 0,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { loadMember, app } = nextProps
    const { familyMembers, loadingFamilyMembers } = app
    if (prevState.familyMembersQtd === 0 && !loadingFamilyMembers) {
      familyMembers.forEach(member => loadMember(member.id))
      return {
        familyMembersQtd: familyMembers.length,
      }
    }

    return null
  }

  toggleModal = () => {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  saveNewMember = member => {
    this.toggleModal()
  }

  render() {
    const { isModalOpen } = this.state
    const {
      family: { members },
    } = this.props

    return (
      <div>
        <h1>Family</h1>
        {members.map(member => (
          <Button key={member.id} className={addFamilyMember}>
            <UserItem user={member} />
          </Button>
        ))}
        <Button className={addFamilyMember} onClick={this.toggleModal}>
          <UserItem />
        </Button>
        <Modal open={isModalOpen} onClose={this.toggleModal}>
          <FamilyMemberForm onSave={this.saveNewMember} />
        </Modal>
      </div>
    )
  }
}

FamilyMembers.propTypes = {
  app: PropTypes.object.isRequired,
  family: PropTypes.object.isRequired,
  loadMember: PropTypes.func.isRequired,
}

export default FamilyMembers
