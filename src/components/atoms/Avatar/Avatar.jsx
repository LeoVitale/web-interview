import React from 'react';
import styles from './Avatar.module.scss';

const Avatar = () => {
  const { avatar } = styles;
  return (
    <div className={avatar}>
      <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" alt=""/>
    </div>
  );
};

export default Avatar;
