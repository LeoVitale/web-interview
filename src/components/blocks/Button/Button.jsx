import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, ...props}) => {
  const { button } = styles;
  return (
    <button className={button} {...props}>
      {children}
    </button>
  );
};

export default Button;
