import React from 'react';
import styles from './TextArea.module.scss';

const TextArea = (props) => {
  const { textArea } = styles;
  return (
    <div className={textArea}>
      <textarea {...props}></textarea>
    </div>
  );
};

export default TextArea;
