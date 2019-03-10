import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'components/atoms/Icon'
import { menuItem, iconItem } from './MenuItem.module.scss'

const MenuItem = ({ className, icon, label, to }) => {
  return (
    <Link className={`${menuItem} ${className}`} to={to}>
      <Icon type={icon} className={iconItem} />
      <span>{label}</span>
    </Link>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

MenuItem.defaultProps = {
  className: '',
  icon: '',
}

export default MenuItem
