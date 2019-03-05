import React from 'react';
import MenuItem from 'components/atoms/MenuItem';
import Avatar from 'components/atoms/Avatar';
import styles from  './Header.module.scss';

const Header = ({ logo }) => {
  const { appHeader, appLogo, menu } = styles;
  return (
    <header className={appHeader}>
      <img src={logo} className={appLogo} alt="logo" />
      <nav className={menu}>
        <MenuItem label="Book" to="/new-appointments" />
        <MenuItem label="Appointments" to="/" />
        <MenuItem label="Family Members" to="/family-members" />
        <Avatar />
      </nav>
    </header>
  )
}

export default Header;
