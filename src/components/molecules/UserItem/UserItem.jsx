import React from 'react';
import Avatar from 'components/atoms/Avatar';
import UserHeader from 'components/atoms/UserHeader';
import styles from  './UserItem.module.scss';

const UserItem = () => {
  const { userItem, userData, actions } = styles;
  return (
    <div className={userItem}>
      <div className={userData}>
        <Avatar/>
        <UserHeader title="Leonardo Vitale" subheader="Teste" />
      </div>
      <div className={actions}>
        change
      </div>
    </div>
  );
};

export default UserItem;
