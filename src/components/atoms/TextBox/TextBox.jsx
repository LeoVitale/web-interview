import React from 'react';
import styles from './TextBox.module.scss';

const TextBox = ({ name, label, ...props }) => {
  const { textBox, title, input } = styles;
  return (
    <div className={textBox}>
      {label && <label className={title} htmlFor={name}>{label}</label>}
      <input className={input} name={name} id={name} {...props} type="text"/>
    </div>
  );
};

export default TextBox;
