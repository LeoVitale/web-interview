import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ children, ...props }) => {
  const { button } = styles
  return (
    <button className={button} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Button
