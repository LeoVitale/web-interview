import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import MenuItem from 'components/atoms/MenuItem'
import Avatar from 'components/atoms/Avatar'
import { appHeader, appLogo, menu } from './Header.module.scss'

const Header = ({ logo, user }) => {
  return (
    <header className={appHeader}>
      <img src={logo} className={appLogo} alt="logo" />
      <nav className={menu}>
        <MenuItem icon="book" label="Book" to="/new-appointments" />
        <MenuItem icon="appointments" label="Appointments" to="/appointments" />
        <MenuItem icon="family" label="Family Members" to="/family-members" />
        {user && <Link to="/"><Avatar size="xSmall" img={user.avatar} /></Link>}
      </nav>
    </header>
  )
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}

export default Header
