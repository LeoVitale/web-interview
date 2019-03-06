import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ children, className, ...props }) => {
  const { button } = styles
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
