import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'components/atoms/MenuItem'
import Avatar from 'components/atoms/Avatar'
import { appHeader, appLogo, menu } from './Header.module.scss'

const Header = ({ logo, user }) => {
  return (
    <header className={appHeader}>
      <img src={logo} className={appLogo} alt="logo" />
      <nav className={menu}>
        <MenuItem label="Book" to="/new-appointments" />
        <MenuItem label="Appointments" to="/" />
        <MenuItem label="Family Members" to="/family-members" />
        <Avatar size="small" img={user.avatar} />
      </nav>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default Header
