import React, { Component } from 'react'

import FamilyMembers from 'containers/FamilyMembers'

import MenuItem from 'components/atoms/MenuItem'
import Button from 'components/atoms/Button'
import UserItem from 'components/molecules/UserItem'
import Modal from 'components/molecules/Modal'

import { home, menu, menuItem } from './Home.module.scss'

class Home extends Component {
  state = {
    isModalOpen: false,
  }

  openFamilyModal = () => {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  render() {
    const { app } = this.props
    const { isModalOpen } = this.state

    return (
      <div className={home}>
        <UserItem
          user={app.user}
          action={
            <Button type="link" onClick={this.openFamilyModal}>
              change
            </Button>
          }
        />
        <nav className={menu}>
          <MenuItem className={menuItem} label="Family" to="/family-members" />
          <MenuItem className={menuItem} label="Appointments" to="/" />
          <MenuItem className={menuItem} label="Personal Details" to="/" />
        </nav>
        <Modal title="Family" open={isModalOpen} onClose={this.openFamilyModal}>
          <FamilyMembers />
        </Modal>
      </div>
    )
  }
}

export default Home
