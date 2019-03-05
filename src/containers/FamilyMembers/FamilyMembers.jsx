import React, { Component } from 'react'
import Modal from 'components/molecules/Modal'
import UserItem from 'components/molecules/UserItem'
import FamilyMemberForm from 'components/organisms/FamilyMemberForm'
import { familyMembers, users } from 'services'

class FamilyMembers extends Component {
  state = {
    isModalOpen: false,
    familyInfo: [],
  }

  async componentDidMount() {
    familyMembers().then(family => {
      const results = family.map(async member => await users(`/${member.id}`))
      Promise.all(results).then(familyInfo => this.setState({ familyInfo }))
    })
  }

  toggleModal = () => {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  saveNewMember = member => {
    this.toggleModal()
  }

  render() {
    const { isModalOpen, familyInfo } = this.state
    return (
      <div>
        {familyInfo.map(member => (
          <UserItem key={member.id} user={member} />
        ))}
        <button onClick={this.toggleModal}>Open Modal</button>
        <Modal open={isModalOpen} onClose={this.toggleModal}>
          <FamilyMemberForm onSave={this.saveNewMember} />
        </Modal>
      </div>
    )
  }
}

export default FamilyMembers
