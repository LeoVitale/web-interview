import React from 'react'
import PropTypes from 'prop-types'
import { button, link } from './Button.module.scss'

const Button = ({ children, className, type, ...props }) => {
  const style = type === 'link' ? link : button
  return (
    <button className={`${style} ${className}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Button
