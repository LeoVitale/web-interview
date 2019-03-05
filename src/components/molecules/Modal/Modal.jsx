import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ children, open, onClose }) => {
  const { modal, overlay, header, content } = styles;

  if (!open) {
    return null;
  }

  return (
    <div className={overlay}>
      <div className={modal}>
        <div className={header}>
          <button onClick={onClose}>close</button>
        </div>
        <div className={content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
