import React from 'react';
import styles from './UserHeader.module.scss';

const UserHeader = ({ title, subheader }) => {
  const { userHeader } = styles;
  return (
    <div className={userHeader}>
      {title && <span className={styles.title}>{title}</span>}
      {subheader && <span className={styles.subheader}>{subheader}</span>}
    </div>
  )
}

export default UserHeader
