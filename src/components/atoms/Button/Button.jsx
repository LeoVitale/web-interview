import React from 'react'
import PropTypes from 'prop-types'
import { button } from './Button.module.scss'

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`${button} ${className}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
}

export default Button
