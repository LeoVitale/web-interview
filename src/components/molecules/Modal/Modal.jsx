import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import styles from './Modal.module.scss'

const Modal = ({ children, open, onClose }) => {
  const { modal, overlay, header, content, closeBtn } = styles

  if (!open) {
    return null
  }

  return (
    <div className={overlay}>
      <div className={modal}>
        <div className={header}>
          <Button onClick={onClose} className={closeBtn}>
            <Icon type="close" />
          </Button>
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
