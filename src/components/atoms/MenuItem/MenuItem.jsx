import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.scss';

const MenuItem = ({ icon, label, to }) => {
  const { menuItem } = styles;
  return (
    <Link className={menuItem} to={to}>
      <i>{icon}</i>
      <span>{label}</span>
    </Link>
  );
};

export default MenuItem;
