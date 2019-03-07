import React from 'react'
import PropTypes from 'prop-types'
import { textBox, title, input } from './TextBox.module.scss'

const TextBox = ({ name, label, ...props }) => {
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
