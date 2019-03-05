import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'

const Modal = ({ children, open, onClose }) => {
  const { modal, overlay, header, content } = styles

  if (!open) {
    return null
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
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default Modal
