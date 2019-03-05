import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextBox.module.scss'

const TextBox = ({ name, label, ...props }) => {
  const { textBox, title, input } = styles
  return (
    <div className={textBox}>
      {label && (
        <label className={title} htmlFor={name}>
          {label}
        </label>
      )}
      <input className={input} name={name} id={name} {...props} type="text" />
    </div>
  )
}

TextBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextBox
