import React from 'react'
import PropTypes from 'prop-types'
import { radio } from './Radio.module.scss'

const Radio = ({ value, label, name, ...props }) => {
  return (
    <div className={radio}>
      <input type="radio" id={label} name={name} value={value} {...props} />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}

Radio.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Radio
