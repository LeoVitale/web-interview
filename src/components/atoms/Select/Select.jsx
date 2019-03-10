import React from 'react'
import { selectCustom } from './Select.module.scss'

const SelectCustom = ({ options, ...props }) => {
  return (
    <select className={selectCustom} {...props}>
      {options.map(item => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

export default SelectCustom
