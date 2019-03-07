import React, { Component } from 'react'
import Button from 'components/atoms/Button'
import Modal from 'components/molecules/Modal'
import UserItem from 'components/molecules/UserItem'
import FamilyMemberForm from 'components/organisms/FamilyMemberForm'
import { familyMembers, users } from 'services'
import styles from './FamilyMembers.module.scss'

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
    const { addFamilyMember } = styles

    console.log(this.props.appointments)

    return (
      <div>
        <h1>Family</h1>
        {familyInfo.map(member => (
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

export default FamilyMembers
