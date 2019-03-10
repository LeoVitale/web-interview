import React from 'react'
import PropTypes from 'prop-types'
import { button, link } from './Button.module.scss'

const Button = ({ children, className, disabled, type, ...props }) => {
  const style = type === 'link' ? link : button
  return (
    <button disabled={disabled} className={`${style} ${className}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  children: null,
  className: '',
  type: '',
  disabled: false,
}

export default Button
