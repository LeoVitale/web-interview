import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import Button from 'components/atoms/Button'
import Icon from 'components/atoms/Icon'

import {
  modal,
  overlay,
  header,
  content,
  closeBtn,
  alignBetween,
} from './Modal.module.scss'
import './ModalTransition.scss'

const Modal = ({ children, open, onClose, title }) => {
  return (
    <CSSTransition in={open} timeout={300} classNames="overlay" unmountOnExit>
      <div className={overlay}>
        <CSSTransition in={open} timeout={300} classNames="modal" unmountOnExit>
          <div className={modal}>
            <div className={`${header} ${title ? alignBetween : ''}`}>
              {title && <h1>{title}</h1>}
              <Button onClick={onClose} className={closeBtn}>
                <Icon type="close" />
              </Button>
            </div>
            <div className={content}>{children}</div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
}

Modal.defaultProps = {
  title: '',
}

export default Modal
