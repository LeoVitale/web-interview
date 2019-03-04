import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ value, label, name, ...props }) => {
  const { radio } = styles;
  return (
    <div className={radio}>
      <input type="radio" id={label} name={name} value={value} {...props}/>
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Radio;
