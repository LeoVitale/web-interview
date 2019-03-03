import React from 'react';
import MenuItem from 'components/blocks/MenuItem';
import Avatar from 'components/blocks/Avatar';
import styles from  './Header.module.scss';

const Header = ({ logo }) => {
  const { appHeader, appLogo, menu } = styles;
  return (
    <header className={appHeader}>
      <img src={logo} className={appLogo} alt="logo" />
      <nav className={menu}>
        <MenuItem label="Book" to="/new-appointments" />
        <MenuItem label="Appointments" to="/" />
        <MenuItem label="Family Members" to="/family-member" />
        <Avatar />
      </nav>
    </header>
  )
}

export default Header;
