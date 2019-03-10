import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'components/atoms/Icon'
import { labelSpan, titleIcon } from './Title.module.scss'

const Title = ({ icon, label, tag }) => {
  const Component = tag ? tag : 'h1'
  return (
    <Component>
      {icon && <Icon className={titleIcon} type={icon} />}
      <span className={labelSpan}>{label}</span>
    </Component>
  )
}

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

Title.defaultProps = {
  icon: '',
  label: '',
}

export default Title
