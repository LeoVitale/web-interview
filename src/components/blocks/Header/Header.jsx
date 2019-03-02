import React from 'react';
import './Header.scss';

const Header = ({ logo }) => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  )
}

export default Header;
