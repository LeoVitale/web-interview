import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/atoms/Icon'
import { labelSpan, titleIcon } from './Title.module.scss'

const Title = ({ icon, label }) => {
  return (
    <h3>
      {icon && <Icon className={titleIcon} type={icon} />}
      <span className={labelSpan}>{label}</span>
    </h3>
  )
}

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default Title
