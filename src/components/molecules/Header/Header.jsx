import React from 'react'
import PropTypes from 'prop-types'
import MenuItem from 'components/atoms/MenuItem'
import Avatar from 'components/atoms/Avatar'
import styles from './Header.module.scss'

const Header = ({ logo }) => {
  const { appHeader, appLogo, menu } = styles
  return (
    <header className={appHeader}>
      <img src={logo} className={appLogo} alt="logo" />
      <nav className={menu}>
        <MenuItem label="Book" to="/new-appointments" />
        <MenuItem label="Appointments" to="/" />
        <MenuItem label="Family Members" to="/family-members" />
        <Avatar size="small"/>
      </nav>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
}

export default Header
