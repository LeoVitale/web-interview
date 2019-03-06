import React from 'react'
import Select from 'react-select'

const customStyles = {
  valueContainer: (provided, state) => ({
    ...provided,
    color: 'black',
    fontSize: '1em',
  }),
  control: (provided, state) => ({
    ...provided,
    color: 'black',
    borderColor: '#dddddd',
    boxShadow: '0 0 0 1px #dddddd',
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'white' : 'black',
    fontSize: '1em',
    backgroundColor: state.isFocused && '#63dbc1',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

const SelectCustom = ({ ...props }) => {
  return <Select {...props} styles={customStyles} />
}

export default SelectCustom
