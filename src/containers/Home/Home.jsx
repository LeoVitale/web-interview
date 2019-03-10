import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FamilyMembers from 'containers/FamilyMembers'
import { findMember } from 'utils/filters'

import Title from 'components/atoms/Title'
import MenuItem from 'components/atoms/MenuItem'
import Button from 'components/atoms/Button'
import UserItem from 'components/molecules/UserItem'
import Modal from 'components/molecules/Modal'

import { home, menu, menuItem, divider } from './Home.module.scss'

class Home extends Component {
  state = {
    isModalOpen: false,
  }

  openFamilyModal = () => {
    const { isModalOpen } = this.state
    this.setState({ isModalOpen: !isModalOpen })
  }

  onChangeMember = () => {
    this.openFamilyModal()
  }

  render() {
    const {
      app: { memberSelected, user },
      family: { members },
    } = this.props
    const { isModalOpen } = this.state

    return (
      <div className={home}>
        <UserItem
          user={findMember(memberSelected, user, members)}
          action={
            <Button type="link" onClick={this.openFamilyModal}>
              change
            </Button>
          }
        />
        <hr className={divider} />
        <nav className={menu}>
          <Title label="Account" tag="h3" />
          <MenuItem className={menuItem} label="Family" to="/family-members" />
          <Title label="Clinical Records" tag="h3" />
          <MenuItem className={menuItem} label="Appointments" to="/appointments" />
          <MenuItem className={menuItem} label="Personal Details" to="/" />
        </nav>
        <Modal open={isModalOpen} onClose={this.openFamilyModal}>
          <FamilyMembers onChangeMember={this.onChangeMember} />
        </Modal>
      </div>
    )
  }
}

Home.propTypes = {
  app: PropTypes.object.isRequired,
  family: PropTypes.object.isRequired,
  changeMember: PropTypes.func.isRequired,
}

export default Home
